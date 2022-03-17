import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-assistant',
  templateUrl: './business-assistant.component.html',
  styleUrls: ['./business-assistant.component.css']
})
export class BusinessAssistantComponent implements OnInit {



  // listado: object= {
  //   title1: 'pages.business-assistant.section2.title',
  //   subcat1: 'pages.business-assistant.section3.title',
  //   subcat2: 'pages.business-assistant.section4.title',
  //   subcat3: 'pages.business-assistant.section5.title',
  //   subcat4: 'pages.business-assistant.section6.title',
  //   title12: 'pages.business-assistant.section7.title'
  // }

  


  item: string = ''
  active: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  isOpen(activo: string){
    this.item = activo
    this.active = true
  }

}
