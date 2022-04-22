// ANGULAR CORE
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-virtual-assistant-buttons-container',
  templateUrl: './virtual-assistant-buttons-container.component.html',
  styleUrls: ['./virtual-assistant-buttons-container.component.css']
})
export class VirtualAssistantButtonsContainerComponent {

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

  constructor() {
    // Main Button
    this.mainButtonText = "Main Button Text";
    this.mainButtonBackground = "primary";
    this.mainButtonDisabled = false;
    
    // Secondary Button
    this.secondaryButtonText = "Secondary Button Text";
    this.secondaryButtonBackground = "";
    this.secondaryButtonDisabled = false;
  }

  /**
   * On main button click (located on the right side of the container)
   */
  onMainButtonClick() {
    if (typeof this.mainButtonFunction === 'function')
      this.mainButtonFunction();
  }

  /**
   * On secondary button click (located on the left side of the container)
   */
  onSecondaryButtonClick() {
    if (typeof this.secondaryButtonFunction === 'function')
      this.secondaryButtonFunction();
  }
}
