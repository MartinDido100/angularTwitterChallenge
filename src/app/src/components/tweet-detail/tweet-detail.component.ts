import { Component, inject } from '@angular/core';
import { StorageService, TweetsService } from '../../services';
import { TweetComponent } from '../tweet/tweet.component';
import { CommentsComponent } from '../comments/comments.component';
import { DatePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-tweet-detail',
  standalone: true,
  imports: [TweetComponent, CommentsComponent,DatePipe,LowerCasePipe],
  templateUrl: './tweet-detail.component.html',
  styleUrl: './tweet-detail.component.css'
})
export class TweetDetailComponent{

  private tweetService = inject(TweetsService);
  private storageServ = inject(StorageService);
  myCommentText = '';
  clickedTweet = this.tweetService.clickedTweet;
  liked = false;
  retweeted = false;

  retweet(){
    if(!this.retweeted){
   
      this.clickedTweet.update(currentValue => {
        if(currentValue === null){
          return currentValue;
        }

        return {
          ...currentValue,
          retweets: currentValue.retweets + 1,
        }
      });

      this.retweeted = true;
      //Llamada al backend para guardar el retweet
    }else{
      this.clickedTweet()!.retweets--;
      this.retweeted = false;
      //Llamada al backend para guardar el retweet
    }
  }

  like(){
    if(!this.liked){
      this.clickedTweet.update(currentValue => {
        if(currentValue === null){
          return currentValue;
        }

        return {
          ...currentValue,
          likes: currentValue.likes + 1,
        }
      });
      //Llamada al backend para guardar el like
      this.liked = true;
    }else{
      this.clickedTweet()!.likes--;
      this.liked = false;
      //Llamada al backend para guardar el like
    }
  }

  getFile(file: string): string {
    return this.storageServ.getFile(file);
  }

  resetButtons(){
    this.liked = false;
    this.retweeted = false;
  }

  handleCommentChange(event: Event){
    this.myCommentText = (event.target as HTMLSpanElement).textContent!;
  }

}