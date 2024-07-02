import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TweetListComponent } from '../tweet-list';
import { StorageService } from '../../services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,TweetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  feedSelectionConstants = {
    FORYOU : 'forU',
    FOLLOWING: 'following'
  }

  selectedFeed: string = this.feedSelectionConstants.FORYOU;
  actualWritingTweet: string = '';
  storageServ = inject(StorageService);

  checkSelectedFeed(feed: string) {
    return this.selectedFeed !== feed;
  }
  
  changeSelectedFeed(feed: string) {
    this.selectedFeed = feed;
  }

  getAvatar(avatar: string): string {
    return this.storageServ.getFile(avatar);
  }

  handleCommentChange(event: Event){
    this.actualWritingTweet = (event.target as HTMLSpanElement).textContent!;
  }

}
