import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; //List of heroes

  selectedHero: Hero; //Selected hero


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void { //Function for selecting heroes
    this.selectedHero = hero;
  }
}
