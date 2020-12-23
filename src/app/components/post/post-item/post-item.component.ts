import { CommentService } from './../../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

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

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getPostComments(this.post.id).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
