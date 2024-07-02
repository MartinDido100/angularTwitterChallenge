import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent, MainContainerComponent, RecomendationsComponent, SidebarComponent } from './src/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FeedComponent, RecomendationsComponent, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
}
