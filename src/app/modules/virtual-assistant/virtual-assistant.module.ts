import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// VIRTUAL-ASSISTANT COMPONENTS
import { VirtualAssistantComponentsModule } from './components/virtual-assistant-components.module';

// VIRTUAL-ASSISTANT PAGE
import { VirtualAssistantPageComponent } from './virtual-assistant-page/virtual-assistant-page.component';


// ARRAY WITH VIRTUAL-ASSISTANT APPLICATION PAGES
const VirtualAssistantPages = [
  VirtualAssistantPageComponent
];


@NgModule({
  declarations: [
    [...VirtualAssistantPages]
  ],
  imports: [
    CommonModule,
    SharedModule,
    VirtualAssistantComponentsModule
  ],
  exports: [
    [...VirtualAssistantPages]
  ],
})
export class VirtualAssistantModule { }
