import { Component, OnInit } from '@angular/core';
import { BusinessAssistantDataService } from 'src/app/services/business-assistant-data.service';

@Component({
  selector: 'app-business-assitant-data-save',
  templateUrl: './business-assitant-data-save.component.html',
  styleUrls: ['./business-assitant-data-save.component.css']
})
export class BusinessAssitantDataSaveComponent implements OnInit {

  constructor(private businessAssistantData : BusinessAssistantDataService) { }

  ngOnInit(): void {
  }

}
