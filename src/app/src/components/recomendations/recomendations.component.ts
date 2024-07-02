import { Component, inject } from '@angular/core';
import { StorageService, TweetsService } from '../../services';

@Component({
  selector: 'app-recomendations',
  standalone: true,
  imports: [],
  templateUrl: './recomendations.component.html',
  styleUrl: './recomendations.component.css'
})
export class RecomendationsComponent {
  storageService = inject(StorageService);
  tweetsService = inject(TweetsService);
  clickedTweet = this.tweetsService.clickedTweet;
  
  getAvatar(avatar: string){
    return this.storageService.getFile(avatar);
  }

}
