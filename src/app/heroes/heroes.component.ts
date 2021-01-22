import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  /**
   * reserve the constructor for simple initialization such as wiring constructor parameters to properties
   * constructors, in angular, shouldn't do anything
   * angular knows angular better than you know angular, so let angular do the initialization work for you
   * angular initializes stuff in ngOnInit()
   * 
   * @param heroService 
   */
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /**
   * the service is asynchronously retrieving data from a server
   * so we have to asynchronously get the data
   */
  getHeroes(): void{
    this.heroService.getHeroes().subscribe((heroes: Hero[]): Hero[] => this.heroes = heroes);
  }

  /**
   * HeroComponent needs the heroes so it can display them, but the constructor should be simple
   * 
   * ngOnInit is a good place for a component to fetch initial data since
   * it's only called once following instantiating the component
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}
