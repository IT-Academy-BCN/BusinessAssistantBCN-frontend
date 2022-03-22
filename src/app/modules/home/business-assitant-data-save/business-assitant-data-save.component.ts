import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-assitant-data-save',
  templateUrl: './business-assitant-data-save.component.html',
  styleUrls: ['./business-assitant-data-save.component.css']
})
export class BusinessAssitantDataSaveComponent implements OnInit {

  @Input() data:any []=[];

  constructor() { }

  ngOnInit(): void {
  }

}
