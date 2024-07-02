import { Component, OnInit, inject } from '@angular/core';
import { StorageService, TweetsService } from '../../services';
import { HomeComponent } from '../home/home.component';
import { TweetDetailComponent } from '../tweet-detail';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [HomeComponent,TweetDetailComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit{

  ngOnInit(): void {
    this.tS.getFeed();
  }

  private tS = inject(TweetsService);
  private storageS = inject(StorageService)
  clickedTweet = this.tS.clickedTweet;

  getAvatar(file: string){
    return this.storageS.getFile(file);
  }

}

