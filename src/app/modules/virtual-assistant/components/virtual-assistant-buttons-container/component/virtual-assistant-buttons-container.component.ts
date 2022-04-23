// ANGULAR CORE
import { Component, Input } from '@angular/core';


@Component({
  selector: 'virtual-assistant-buttons-container',
  templateUrl: './virtual-assistant-buttons-container.component.html',
  styleUrls: ['./virtual-assistant-buttons-container.component.css']
})
export class VirtualAssistantButtonsContainerComponent {

  // Main div container '.component-container'
  @Input('containerHeigh') containerHeigh: string;
  @Input('containerBackgroundColor') containerBackgroundColor: string;
  @Input('containerElevationInactive') containerElevationInactive: number;
  @Input('containerElevationActive') containerElevationActive: number;

  // Inner div container '.content-container'
  @Input('containerInnerPadding') containerInnerPadding: string;

  // Settings 
  @Input('containerIsActive') containerIsActive: boolean;

  // Buttons container '.buttons-container'
  @Input('buttonsContainerBackgroundColor') buttonsContainerBackgroundColor: string;
  @Input('buttonsContainerGap') buttonsContainerGap: string;
  @Input('buttonsContainerPadding') buttonsContainerPadding: string;

  // Main Button
  @Input('mainButtonText') mainButtonText: string;
  @Input('mainButtonBackground') mainButtonBackground: string;
  @Input('mainButtonFunction') mainButtonFunction!: () => void;
  @Input('mainButtonDisabled') mainButtonDisabled: boolean;

  // Secondary Button
  @Input('secondaryButtonText') secondaryButtonText: string;
  @Input('secondaryButtonBackground') secondaryButtonBackground: string;
  @Input('secondaryButtonFunction') secondaryButtonFunction!: () => void;
  @Input('secondaryButtonDisabled') secondaryButtonDisabled: boolean;

  /** Returns true if 'hexadecimalValue' is a hexadecimal. */
  private isHexadecimal = (hexadecimalValue: string) => /^[0-9A-F]+$/ig.test(hexadecimalValue);

  /** Returns the background color of the main div '.component-container'. */
  get getContainerBackgroundColor(): string {
    if (this.isHexadecimal(this.containerBackgroundColor))
      return `#${this.containerBackgroundColor}`;
    else
      return this.containerBackgroundColor;
  }

  /** Returns the height of the main div '.component-container'. */
  get getContainerHeigh(): string {
    return this.containerHeigh;
  }

  /** Returns the background color of the buttons-container div '.buttons-container'. */
  get getButtonsContainerBackgroundColor(): string {
    if (this.isHexadecimal(this.buttonsContainerBackgroundColor))
      return `#${this.buttonsContainerBackgroundColor}`;
    else
      return this.buttonsContainerBackgroundColor;
  }

  /** Returns the gap of the buttons-container div '.buttons-container'. */
  get getButtonsContainerGap(): string {
    return this.buttonsContainerGap;
  }

  /** Returns the padding of the buttons-container div '.buttons-container'. */
  get getButtonsContainerPadding(): string {
    return this.buttonsContainerPadding;
  }

  constructor() {
    // Main div container '.component-container'
    this.containerHeigh = "390px";
    this.containerBackgroundColor = "white";
    this.containerElevationInactive = 4;
    this.containerElevationActive = 8;

    // Inner div container '.content-container'
    this.containerInnerPadding = "10px";

    // Settings 
    this.containerIsActive = false;

    // Buttons container '.buttons-container'
    this.buttonsContainerBackgroundColor = "white";
    this.buttonsContainerGap = "15px";
    this.buttonsContainerPadding = "15px";

    // Main Button
    this.mainButtonText = "Main Button Text";
    this.mainButtonBackground = "primary";
    this.mainButtonDisabled = false;

    // Secondary Button
    this.secondaryButtonText = "Secondary Button Text";
    this.secondaryButtonBackground = "";
    this.secondaryButtonDisabled = false;
  }

  /** On main button click (located on the right side of the container). */
  onMainButtonClick() {
    if (typeof this.mainButtonFunction === 'function')
      this.mainButtonFunction();
  }

  /** On secondary button click (located on the left side of the container). */
  onSecondaryButtonClick() {
    if (typeof this.secondaryButtonFunction === 'function')
      this.secondaryButtonFunction();
  }
}
