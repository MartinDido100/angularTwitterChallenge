import { Component,OnInit ,inject, output } from '@angular/core';
import { TweetsService } from '../../services';
import { Tweet } from '../../interfaces';
import { TweetComponent } from '../tweet';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [TweetComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{

  ngOnInit(): void {
    this.tweetService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  onClickedComment = output();
  
  comments: Tweet[] = [];
  tweetService = inject(TweetsService);
  clickedTweet = this.tweetService.clickedTweet;

  emitClick(){
    this.onClickedComment.emit();
  }

}