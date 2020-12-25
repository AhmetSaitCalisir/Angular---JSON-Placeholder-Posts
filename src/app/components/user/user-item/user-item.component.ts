import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user: User = new User(
    0,
    'KULLANICI YÜKLENİYOR',
    'KULLANICI YÜKLENİYOR'
  );

  constructor() {}

  ngOnInit(): void {}

  userUrl(): string {
    return `/user/${this.user.id}`;
  }
}
