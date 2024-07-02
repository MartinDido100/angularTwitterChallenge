import { Component, Input, inject } from '@angular/core';
import { Tweet } from '../../interfaces';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { StorageService, TweetsService } from '../../services';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [DatePipe,LowerCasePipe],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css'
})
export class TweetComponent{
  private tweetService = inject(TweetsService);
  private storageServ = inject(StorageService)
  @Input({required: true}) tweet!: Tweet;

  liked = false;
  retweeted = false;

  retweet(){
    if(!this.retweeted){
      this.tweet.retweets++;
      this.retweeted = true;
      //Aca iria el llamado al backend para actualizar la cantidad de retweets, lo actualizo en el front para que se vea mas rapido y
      //cuando se actualice la pagina ya trae el dato actualizado del back.
      //seria algo asi: this.tweetService.updateRetweets(this.tweet.id);
    }else{
      this.tweet.retweets--;
      this.retweeted = false;
    }
  }

  like(){
    if(!this.liked){
      this.tweet.likes++;
      this.liked = true;
      //Aca iria el llamado al backend para actualizar la cantidad de likes, lo actualizo en el front para que se vea mas rapido y
      //cuando se actualice la pagina ya trae el dato actualizado del back.
      //seria algo asi: this.tweetService.updateLikes(this.tweet.id);
    }else{
      this.tweet.likes--;
      this.liked = false;
    }
  }

  openTweetDetail(tweet: Tweet){
    this.tweetService.setClickedTweet(tweet);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  getFile(avatar: string): string {
    return this.storageServ.getFile(avatar);
  }

}
