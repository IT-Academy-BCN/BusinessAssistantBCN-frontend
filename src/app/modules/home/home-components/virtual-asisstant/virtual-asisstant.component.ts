import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-asisstant',
  templateUrl: './virtual-asisstant.component.html',
  styleUrls: ['./virtual-asisstant.component.css']
})
export class VirtualAsisstantComponent implements OnInit {

  businessAssistantIcon = "assets/img/commerce-and-shopping.png"
  buildingIcon = "assets/img/buildings.png"
  constructor() { }

  ngOnInit(): void {
  }

}
