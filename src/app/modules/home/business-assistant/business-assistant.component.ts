import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-assistant',
  templateUrl: './business-assistant.component.html',
  styleUrls: ['./business-assistant.component.css']
})
export class BusinessAssistantComponent implements OnInit {

  item: string = ''
  activo: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  open(activo: string){
    this.item = activo
    this.activo = true
  }

  cambioClase(item: string): string{
    return (item === this.item) ? 'active': ''
  }

}
