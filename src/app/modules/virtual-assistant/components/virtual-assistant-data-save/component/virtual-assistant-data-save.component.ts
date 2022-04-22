// ANGULAR CORE
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-virtual-assistant-data-save',
  templateUrl: './virtual-assistant-data-save.component.html',
  styleUrls: ['./virtual-assistant-data-save.component.css']
})
export class VirtualAssistantDataSaveComponent {

  // Data to show in ul > li {{ info | translate }}.
  @Input('dataSaveDataInput') dataInput: any[] = []; // TODO improve typing any[]

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }

}
