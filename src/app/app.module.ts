import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostItemComponent } from './components/post/post-item/post-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentItemComponent } from './components/comment/comment-item/comment-item.component';

@NgModule({
  declarations: [AppComponent, PostComponent, PostItemComponent, CommentComponent, CommentItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
