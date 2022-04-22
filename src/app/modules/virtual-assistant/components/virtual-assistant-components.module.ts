import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES VIRTUAL-ASSISTANT-COMPONENTS
import { VirtualAssistantAccordionModule } from './virtual-assistant-accordion/virtual-assistant-accordion.module';
import { VirtualAssistantButtonsContainerModule } from './virtual-assistant-buttons-container/virtual-assistant-buttons-container.module';
import { VirtualAssistantDataSaveModule } from './virtual-assistant-data-save/virtual-assistant-data-save.module';
import { VirtualAssistantTreeModule } from './virtual-assistant-tree/virtual-assistant-tree.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantDataSaveModule,
    VirtualAssistantTreeModule
  ],
  exports: [

    // MODULE COMPONENTS VIRTUAL-ASSISTANT visibles for VIRTUAL-ASSISTANT-PAGES
    VirtualAssistantAccordionModule,
    VirtualAssistantDataSaveModule,
    VirtualAssistantTreeModule
  ]
})
export class VirtualAssistantComponentsModule { }
