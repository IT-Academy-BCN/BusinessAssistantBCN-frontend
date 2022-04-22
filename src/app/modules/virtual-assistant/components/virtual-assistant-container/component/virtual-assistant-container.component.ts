// ANGULAR CORE
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-virtual-assistant-container',
  templateUrl: './virtual-assistant-container.component.html',
  styleUrls: ['./virtual-assistant-container.component.css']
})
export class VirtualAssistantContainerComponent {

  // MAIN DIV CONTAINER '.component-container'
  @Input('containerHeigh') containerHeigh: string;
  @Input('containerBackgroundColor') containerBackgroundColor: string;
  @Input('containerElevationInactive') containerElevationInactive: number;
  @Input('containerElevationActive') containerElevationActive: number;

  // INNER DIV CONTAINER '.content-container'
  @Input('containerInnerPadding') containerInnerPadding: string;

  // SETTINGS 
  @Input('containerIsActive') containerIsActive: boolean;

  /** Returns the background color of the main div 'component-container'. */
  get getContainerBackgroundColor(): string {
    const isHexadecimal = (hexadecimalValue: string) => /^[0-9A-F]+$/ig.test(hexadecimalValue);

    if (isHexadecimal(this.containerBackgroundColor))
      return `#${this.containerBackgroundColor}`;
    else
      return this.containerBackgroundColor;
  }

  /** Returns the height of the main div 'component-container'. */
  get getContainerHeigh(): string {
    return this.containerHeigh;
  }

  constructor() {
    this.containerHeigh = "390px";
    this.containerInnerPadding = "10px";
    this.containerBackgroundColor = "white";
    this.containerElevationInactive = 4;
    this.containerElevationActive = 8;
    this.containerIsActive = false;
  }

}
