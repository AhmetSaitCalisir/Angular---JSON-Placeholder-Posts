import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css'],
})
export class PageUserComponent implements OnInit {
  userId: number = 1; //Geçiçi olarak 1 alıyorum. Parametre olarak gelecek değer.
  user: User = new User(0, 'KULLANICI YÜKLENİYOR', 'KULLANICI YÜKLENİYOR');
  posts: Post[] = [new Post(0, 0, 'POST YÜKLENİYOR', 'POST YÜKLENİYOR')];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe((user) => {
      this.user = user;
    });
    this.userService.getUserPosts(this.userId).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
