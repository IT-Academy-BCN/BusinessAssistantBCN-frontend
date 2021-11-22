import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mainHomeImage = "../assets/img/womanCoworking.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
