// ANGULAR CORE
import { Component, Input } from '@angular/core';

// SUPER - DEFAULT STYLES
import { DefaultValues } from '../values/default-values';

// COLOR-TOOLS
import { isHexadecimal } from '../tools/color-tools';


@Component({
  selector: 'super-base-container',
  template: ''
})
export class BaseContainerComponent {

  // Main div container '.component-container'
  @Input('containerHeigh') containerHeigh: string;
  @Input('containerBackgroundColor') containerBackgroundColor: string;
  @Input('containerElevationInactive') containerElevationInactive: number;
  @Input('containerElevationActive') containerElevationActive: number;

  // Inner div container '.content-container'
  @Input('containerInnerPadding') containerInnerPadding: string;

  // Settings 
  @Input('containerIsActive') containerIsActive: boolean;

  constructor() {
    this.containerHeigh = DefaultValues.BaseContainerHeight;
    this.containerInnerPadding = DefaultValues.BaseContainerInnerPadding;
    this.containerBackgroundColor = DefaultValues.BaseContainerBackgroundColor;
    this.containerElevationInactive = DefaultValues.BaseContainerElevationInactive;
    this.containerElevationActive = DefaultValues.BaseContainerElevationActive;
    this.containerIsActive = DefaultValues.BaseContainerIsActive;
  }

  /** Returns the background color of the main div 'component-container'. */
  get getContainerBackgroundColor(): string {
    if (isHexadecimal(this.containerBackgroundColor))
      return `#${this.containerBackgroundColor}`;
    else
      return this.containerBackgroundColor;
  }

  /** Returns the height of the main div 'component-container'. */
  get getContainerHeigh(): string {
    return this.containerHeigh;
  }

}
