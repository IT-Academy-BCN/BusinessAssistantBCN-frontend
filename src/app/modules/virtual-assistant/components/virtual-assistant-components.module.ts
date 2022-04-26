// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES VIRTUAL-ASSISTANT-COMPONENTS
import { VirtualAssistantAccordionModule } from './virtual-assistant-accordion/virtual-assistant-accordion.module';
import { VirtualAssistantButtonsContainerModule } from './virtual-assistant-buttons-container/virtual-assistant-buttons-container.module';
import { VirtualAssistantContainerModule } from './virtual-assistant-container/virtual-assistant-container.module';
import { VirtualAssistantListModule } from './virtual-assistant-list/virtual-assistant-list.module';
import { VirtualAssistantTreeModule } from './virtual-assistant-tree/virtual-assistant-tree.module';

// VIRTUAL-SHOW-COMPONENT-SHOWCASE only for production
import { VirtualAssistantComponentShowcaseModule } from './showcase/virtual-assistant-component-showcase.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantContainerModule,
    VirtualAssistantListModule,
    VirtualAssistantTreeModule,
    VirtualAssistantComponentShowcaseModule
  ],
  exports: [

    // MODULE COMPONENTS VIRTUAL-ASSISTANT visibles for VIRTUAL-ASSISTANT-PAGES
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantContainerModule,
    VirtualAssistantListModule,
    VirtualAssistantTreeModule,
    VirtualAssistantComponentShowcaseModule
  ]
})
export class VirtualAssistantComponentsModule { }
