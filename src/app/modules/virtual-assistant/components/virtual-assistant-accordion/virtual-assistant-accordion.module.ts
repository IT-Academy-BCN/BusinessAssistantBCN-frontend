import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';

// SHARED MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENT
import { VirtualAssistantAccordionComponent } from './component/virtual-assistant-accordion.component';


@NgModule({
  declarations: [
    VirtualAssistantAccordionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    // MATERIAL
    MatExpansionModule
  ],
  exports: [
    VirtualAssistantAccordionComponent
  ]
})
export class VirtualAssistantAccordionModule { }
