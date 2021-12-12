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

  like() {
    let like: any = document.getElementById("contenido");
    let message: any = document.getElementById("like");

    console.log("funciona")
    if (like.style.display === "none") {
      like.style.display = "block";
      message.style.display = "none";
    } else {
      like.style.display = "none";
      message.style.display = "block";
    }
  }

  getbacklike() {
    let message: any = document.getElementById("like");
    let message2: any = document.getElementById("dislike");
    let like: any = document.getElementById("contenido");
    
    console.log("funciona")
    if (message.style.display === "none") {
      message.style.display = "block";
      like.style.display = "none";
    } else {
      message.style.display = "none";
      like.style.display = "block";
    }
  }

  dislike() {
    let like: any = document.getElementById("contenido");
    let message2: any = document.getElementById("dislike");

    console.log("funciona")
    if (like.style.display === "none") {
      like.style.display = "block";
      message2.style.display = "none";
    } else {
      like.style.display = "none";
      message2.style.display = "block";
    }
  }

  getbackdis() {
    let message2: any = document.getElementById("dislike");
    let like: any = document.getElementById("contenido");
    
    console.log("funciona")
    if (message2.style.display === "none") {
      message2.style.display = "block";
      like.style.display = "none";
    } else {
      message2.style.display = "none";
      like.style.display = "block";
    }
  }

}
