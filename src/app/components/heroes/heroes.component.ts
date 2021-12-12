import { Component, OnInit } from '@angular/core';
import { HeoresService, Heroe } from '../../services/heores.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeoresService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.log( this.heroes );
  }

}
