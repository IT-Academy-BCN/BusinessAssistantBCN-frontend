import { Component, Input, OnInit } from '@angular/core';
import { BusinessAssistantDataService } from 'src/app/services/business-assistant-data.service';


@Component({
  selector: 'app-business-assistant',
  templateUrl: './business-assistant.component.html',
  styleUrls: ['./business-assistant.component.css']
})
export class BusinessAssistantComponent implements OnInit {

@Input() data:any;

public listado:Array<any>= [];

ngOnInit(): void {
  this.listado= [
    {title: 'pages.business-assistant.section2.title'},
    {title: 'pages.business-assistant.section3.title'},
    {title: 'pages.business-assistant.section4.title'},
    {title: 'pages.business-assistant.section5.title'},
    {title: 'pages.business-assistant.section6.title'},
    {title: 'pages.business-assistant.section7.title'}
  ]
}



  item: string = ''
  active: boolean = false

  constructor(private businessAssistantData : BusinessAssistantDataService) { }



  isOpen(activo: string){
    this.item = activo
    this.active = true
  }

  // saveData(){
  //   this.businessAssistantData.dataSaver.emit()
  // }

}
