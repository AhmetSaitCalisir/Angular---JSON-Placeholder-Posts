import { CommentService } from './../../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post = new Post(0, 0, 'POST YÜKLENİYOR', 'POST YÜKLENİYOR');

  comments: Comment[] = [
    new Comment(
      0,
      0,
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR'
    ),
  ];

  user: User = new User(0, 'KULLANICI YÜKLENİYOR', 'KULLANICI YÜKLENİYOR');

  constructor(
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.commentService.getPostComments(this.post.id).subscribe((comments) => {
      this.comments = comments;
    });
    this.userService.getUser(this.post.userId).subscribe((user) => {
      this.user = user;
    });
  }
}
