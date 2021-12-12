import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeoresService {

  private heroes: Heroe[] = [
    {
      nombre: "Superman",
      bio: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      img: "assets/img/superman.png",
      tiempoV: "1 mes atrás en lorem dolor",
      votacion: "LIKE",
      likepercent: "64",
      dispercent: "36"
    },
    {
      nombre: "Thor",
      bio: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      img: "assets/img/thor.png",
      tiempoV: "1 mes atrás en lorem dolor",
      votacion: "DISLIKE",
      likepercent: "36",
      dispercent: "64"
    },
    {
      nombre: "Batman",
      bio: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      img: "assets/img/batman.png",
      tiempoV: "2 mes atrás en lorem dolor",
      votacion: "DISLIKE",
      likepercent: "36",
      dispercent: "64"
    },
    {
      nombre: "Spiderman",
      bio: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
      img: "assets/img/spiderman.png",
      tiempoV: "3 mes atrás en lorem dolor",
      votacion: "LIKE",
      likepercent: "64",
      dispercent: "36"
    }
  ];

  constructor() {
    
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: number ){
    return this.heroes[idx];
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  tiempoV: string;
  votacion: string;
  likepercent: string;
  dispercent: string;
  idx?: number;
};
