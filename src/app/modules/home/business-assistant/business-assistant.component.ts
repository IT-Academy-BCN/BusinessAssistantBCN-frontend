import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-assistant',
  templateUrl: './business-assistant.component.html',
  styleUrls: ['./business-assistant.component.css']
})
export class BusinessAssistantComponent implements OnInit {

  listado: string[] =[
    'pages.business-assistant.section2.title',
    'pages.business-assistant.section3.title',
    'pages.business-assistant.section4.title',
    'pages.business-assistant.section5.title',
    'pages.business-assistant.section6.title',
    'pages.business-assistant.section7.title',
  ]
  item: string = ''
  activo: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  open(activo: string){
    this.item = activo
  }

  cambioClase(item: string): string{
    return (item === this.item) ? 'active': ''
  }

}
