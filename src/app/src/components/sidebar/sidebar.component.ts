import { Component, inject } from '@angular/core';
import { TweetsService } from '../../services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  sidebarConstants = {
    HOME: 'home',
    EXPLORE: 'explore',
    MESSAGE: 'message',
    PROFILE: 'profile',
  }

  activeLink = this.sidebarConstants.HOME;
  private tweetsService = inject(TweetsService);

  backToHome(){
    this.tweetsService.setClickedTweet(null);
  }
  
  checkActiveLink(key: string){
    return this.activeLink === key;
  }

  changeActiveLink(key: string){
    this.activeLink = key;
  }

}