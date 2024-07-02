import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  feed = signal<Tweet[]>([]);
  clickedTweet = signal<Tweet | null>(null);

  setClickedTweet(tweet: Tweet | null) {
    this.clickedTweet.set(tweet);
  }

  //Aca simulo la llamada al backend para obtener los tweets suponiendo que todo sale bien y ya se inicio sesion
  getFeed() {
    this.http.get<Tweet[]>(`${this.apiUrl}/tweets.json`).subscribe({
      next: (tweets) => {
        this.feed.set(tweets);
      },
      error: (err) => {
        //En caso de querer controlar errores
        console.log(err);
      }
    });
  }

  //Aca iria la llamada al backend para obtener los comentarios de un tweet (Uso el mismo archivo para todos, pero en realidad casa tweet deberia tener sus comentarios)
  getComments(){
    return this.http.get<Tweet[]>(`${this.apiUrl}/comments.json`);
  }

}
