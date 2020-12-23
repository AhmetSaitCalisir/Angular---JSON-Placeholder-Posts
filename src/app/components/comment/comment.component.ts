import { CommentService } from './../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [
    new Comment(
      0,
      0,
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR',
      'YORUM YÜKLENİYOR'
    ),
  ];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
