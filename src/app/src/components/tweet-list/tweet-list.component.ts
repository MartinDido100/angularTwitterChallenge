import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TweetsService } from '../../services';
import { TweetComponent } from '../tweet/tweet.component';
import { Tweet } from '../../interfaces';
import { TweetDetailComponent } from '../tweet-detail';

@Component({
  selector: 'app-tweet-list',
  standalone: true,
  imports: [TweetComponent,TweetDetailComponent],
  templateUrl: './tweet-list.component.html',
  styleUrl: './tweet-list.component.css'
})
export class TweetListComponent {
  tweetService = inject(TweetsService);
  tweets = this.tweetService.feed;
}
