import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, MessagesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
