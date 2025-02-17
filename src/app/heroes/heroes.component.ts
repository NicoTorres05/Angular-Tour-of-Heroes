import { Component } from '@angular/core';
import { Hero } from '../hero';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HEROES } from '../mock-heroes';
import {NgFor} from '@angular/common';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
};
 selectedHero?: Hero;
 onSelect(hero: Hero): void {
   this.selectedHero = hero;
 }
}
