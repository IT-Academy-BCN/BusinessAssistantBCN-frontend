import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-assistant',
  templateUrl: './virtual-assistant.component.html',
  styleUrls: ['./virtual-assistant.component.css']
})
export class VirtualAssistantComponent implements OnInit {

  businessAssistantIcon = "assets/img/commerce-and-shopping.png"
  buildingIcon = "assets/img/buildings.png"
  constructor() { }

  ngOnInit(): void {
  }

}
