import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-nav',
  templateUrl: './information-nav.component.html',
  styleUrls: ['./information-nav.component.css']
})
export class InformationNavComponent implements OnInit {

  todayIcon = " ./assets/img/today-512.png";
  peopleIcon = "./assets/img/people_icon.png";
  trophyIcon = "./assets/img/trophy_icon.png";

  constructor() { }

  ngOnInit(): void {
  }

}
