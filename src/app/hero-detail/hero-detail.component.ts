import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // HeroDetail is a child of Heroes
  // use the @Input decorator in a child component so the assigned property can receive its value from its parent component
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
