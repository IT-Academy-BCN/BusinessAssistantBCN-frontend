import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES VIRTUAL-ASSISTANT-COMPONENTS
import { VirtualAssistantAccordionModule } from './virtual-assistant-accordion/virtual-assistant-accordion.module';
import { VirtualAssistantButtonsContainerModule } from './virtual-assistant-buttons-container/virtual-assistant-buttons-container.module';
import { VirtualAssistantListModule } from './virtual-assistant-list/virtual-assistant-list.module';
import { VirtualAssistantTreeModule } from './virtual-assistant-tree/virtual-assistant-tree.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantListModule,
    VirtualAssistantTreeModule
  ],
  exports: [

    // MODULE COMPONENTS VIRTUAL-ASSISTANT visibles for VIRTUAL-ASSISTANT-PAGES
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantListModule,
    VirtualAssistantTreeModule
  ]
})
export class VirtualAssistantComponentsModule { }
