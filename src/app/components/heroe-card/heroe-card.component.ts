import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  /* @Input() index: number; */

  constructor() { }

  ngOnInit(): void {
  }

}
