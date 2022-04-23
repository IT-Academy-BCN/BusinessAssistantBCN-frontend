// ANGULAR CORE
import { Component, Input } from '@angular/core';

// SUPER - BASE-CONTAINER-COMPONENT
import { BaseContainerComponent } from '../../super/base-container.component';
import { DefaultValues } from '../../values/default-values';

// COLOR-TOOLS
import { isHexadecimal } from '../../tools/color-tools';


@Component({
  selector: 'virtual-assistant-buttons-container',
  templateUrl: './virtual-assistant-buttons-container.component.html',
  styleUrls: ['./virtual-assistant-buttons-container.component.css']
})
export class VirtualAssistantButtonsContainerComponent extends BaseContainerComponent {

  // Buttons container '.buttons-container'
  @Input('buttonsContainerBackgroundColor') buttonsContainerBackgroundColor: string;
  @Input('buttonsContainerGap') buttonsContainerGap: string;
  @Input('buttonsContainerPadding') buttonsContainerPadding: string;

  // Main Button
  @Input('mainButtonText') mainButtonText: string;
  @Input('mainButtonColor') mainButtonColor: string;
  @Input('mainButtonFunction') mainButtonFunction!: () => void;
  @Input('mainButtonDisabled') mainButtonDisabled: boolean;

  // Secondary Button
  @Input('secondaryButtonText') secondaryButtonText: string;
  @Input('secondaryButtonColor') secondaryButtonColor: string;
  @Input('secondaryButtonFunction') secondaryButtonFunction!: () => void;
  @Input('secondaryButtonDisabled') secondaryButtonDisabled: boolean;

  constructor() {
    // BaseContainerComponent constructor() as super()
    super();

    // Buttons container '.buttons-container'
    this.buttonsContainerBackgroundColor = DefaultValues.VAButtonsContainerBackgroundColor;
    this.buttonsContainerGap = DefaultValues.VAButtonsContainerGap;
    this.buttonsContainerPadding = DefaultValues.VAButtonsContainerPadding;

    // Main Button
    this.mainButtonText = DefaultValues.VAButtonsContainerMainButtonText;
    this.mainButtonColor = DefaultValues.VAButtonsContainerMainButtonColor;
    this.mainButtonDisabled = DefaultValues.VAButtonsContainerMainButtonDisabled;

    // Secondary Button
    this.secondaryButtonText = DefaultValues.VAButtonsContainerSecondaryButtonText;
    this.secondaryButtonColor = DefaultValues.VAButtonsContainerSecondaryButtonColor;
    this.secondaryButtonDisabled = DefaultValues.VAButtonsContainerSecondaryButtonDisabled;
  }

  /** Returns true if 'hexadecimalValue' is a hexadecimal. */
  // private isHexadecimal = (hexadecimalValue: string) => /^[0-9A-F]+$/ig.test(hexadecimalValue);

  /** Returns the background color of the buttons-container div '.buttons-container'. */
  get getButtonsContainerBackgroundColor(): string {
    if (isHexadecimal(this.buttonsContainerBackgroundColor))
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
