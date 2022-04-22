import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT VIRTUAL-ASSISTANT-CONTAINER
import { VirtualAssistantContainerComponent } from './component/virtual-assistant-container.component';


@NgModule({
  declarations: [
    VirtualAssistantContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VirtualAssistantContainerComponent
  ]
})
export class VirtualAssistantContainerModule { }
