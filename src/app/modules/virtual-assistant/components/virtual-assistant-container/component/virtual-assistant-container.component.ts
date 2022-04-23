// ANGULAR CORE
import { Component } from '@angular/core';

// SUPER - BASE-CONTAINER-COMPONENT
import { BaseContainerComponent } from '../../super/base-container.component';


@Component({
  selector: 'virtual-assistant-container',
  templateUrl: './virtual-assistant-container.component.html',
  styleUrls: ['./virtual-assistant-container.component.css']
})
export class VirtualAssistantContainerComponent extends BaseContainerComponent {

  constructor() {
    // BaseContainerComponent constructor() as super()
    super();
  }

}
