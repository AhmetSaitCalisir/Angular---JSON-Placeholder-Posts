import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment = new Comment(
    0,
    0,
    'YORUM YÜKLENİYOR',
    'YORUM YÜKLENİYOR',
    'YORUM YÜKLENİYOR'
  );

  constructor() {}

  ngOnInit(): void {}
}
