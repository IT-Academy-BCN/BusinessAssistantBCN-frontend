import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-virtual-assistant-data-save',
  templateUrl: './virtual-assistant-data-save.component.html',
  styleUrls: ['./virtual-assistant-data-save.component.css']
})
export class VirtualAssistantDataSaveComponent {

  @Input() data: any []=[];

  constructor() { }


}
