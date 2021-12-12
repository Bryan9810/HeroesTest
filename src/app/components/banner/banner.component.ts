import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  likeAmount: any = 0;
  dislikeAmount: any = 0;
  total: any;
  likeRatio: any = 0;
  dislikeRatio: any = 0;

  getLikeRatio() {
    this.total = this.likeAmount + this.dislikeAmount;
    if (this.total === 0) {
      return 50;
    }
    return (this.likeAmount / this.total) * 100;
  }

  getDislikeRatio() {
    this.total = this.likeAmount + this.dislikeAmount;
    if (this.total === 0) {
      return 50;
    }
    return (this.dislikeAmount / this.total) * 100;
  }

  updateRatios() {
    this.likeRatio = this.getLikeRatio();
    this.dislikeRatio = this.getDislikeRatio();
  }

  ifMethod(elementoA: any, elementoB: any) {

    if (elementoA.style.display === "none") {
      elementoA.style.display = "block";
      elementoB.style.display = "none";
    } else {
      elementoA.style.display = "none";
      elementoB.style.display = "block";
    }

  }

  like() {

    let contenido: any = document.getElementById("contenido");
    let messageLike: any = document.getElementById("like");

    this.likeAmount++;
    this.updateRatios();

    this.ifMethod( contenido,  messageLike);

  }

  dislike() {

    let contenido: any = document.getElementById("contenido");
    let messageDislike: any = document.getElementById("dislike");

    this.dislikeAmount++;
    this.updateRatios();

    this.ifMethod( contenido,  messageDislike);

  }

  getbacklike() { 
    let messageLike: any = document.getElementById("like");
    let contenido: any = document.getElementById("contenido");

    this.ifMethod( messageLike, contenido );
  }

  getbackdis() {
    let messageDislike: any = document.getElementById("dislike");
    let contenido: any = document.getElementById("contenido");

    this.ifMethod( messageDislike, contenido );
   }


}
