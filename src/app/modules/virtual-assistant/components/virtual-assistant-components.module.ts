import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { VirtualAssistantTreeModule } from './virtual-assistant-tree/virtual-assistant-tree.module';
import { VirtualAssistantButtonsContainerModule } from './virtual-assistant-buttons-container/virtual-assistant-buttons-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualAssistantTreeModule,
    VirtualAssistantButtonsContainerModule
  ],
  exports: [
    VirtualAssistantTreeModule
  ]
})
export class VirtualAssistantComponentsModule { }
