import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-virtual-assistant-accordion',
  templateUrl: './virtual-assistant-accordion.component.html',
  styleUrls: ['./virtual-assistant-accordion.component.css']
})
export class VirtualAssistantAccordionComponent {

  @Input('accordionDataInput') dataInput: any[] = [];

  @Output('accordionDataOutput') dataToOuput: EventEmitter<any[]> = new EventEmitter<any[]>();

  dataSend: any[] = [];


  item: number = 0
  isOpen: boolean = false;

  
  constructor() { }

  items(title: number){
    if(this.item != title){
      this.isOpen = true
    }else{
      this.isOpen = !this.isOpen
    }
    this.item = title

  }

  saveData( item: string){
 
    if(!this.dataSend.includes(item)){
      this.dataSend.push(item)
      this.dataToOuput.emit(this.dataSend);
    }

  }

}
