import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {NgForOf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [
    HeroDetailComponent,
    NgForOf
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }


 onSelect(hero: Hero): void {
   this.selectedHero = hero;
   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
 }



}
