// ANGULAR CORE
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-virtual-assistant-accordion',
  templateUrl: './virtual-assistant-accordion.component.html',
  styleUrls: ['./virtual-assistant-accordion.component.css']
})
export class VirtualAssistantAccordionComponent {

  // Data source. Is the object to be displayed in the material-accordion.
  @Input('accordionDataInput') dataInput: any[] = []; // TODO improve typing any[]

  // Component Data Output.
  @Output('accordionDataOutput') dataOutput: EventEmitter<any[]> = new EventEmitter<any[]>(); // TODO improve typing any[]

  // Data shared by this component.
  dataSend: any[] = []; // TODO improve typing any[]

  // Numerical representation of the item index.
  itemAccordion: number = 0;

  // Item display status in material-accordion.
  isItemOpen: boolean = false;

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }

  /**
   * Display (open and close) the items in the material-accordion.
   * @param itemTitle title displayed in item-material-accordion.
   */
  onClickItems(itemTitle: number) {
    if (this.itemAccordion != itemTitle)
      this.isItemOpen = true;
    else
      this.isItemOpen = !this.isItemOpen;

    this.itemAccordion = itemTitle;
  }

  /**
   * Save the item when you click. Output emit 'dataSend'.
   * @param itemToSave Item of the material-accordion to be stored and shared from output.
   */
  onClickItemSaveData(itemToSave: string) {
    if (!this.dataSend.includes(itemToSave)) {
      this.dataSend.push(itemToSave);
      this.dataOutput.emit(this.dataSend);
    }
  }
}
