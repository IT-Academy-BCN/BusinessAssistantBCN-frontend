// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED-MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// VIRTUAL-ASSISTANT-COMPONENTS-MODULE
import { VirtualAssistantComponentsModule } from '../components/virtual-assistant-components.module';

// VIRTUAL-ASSISTANT-MAIN-CONTENT-COMPONENT
import { VirtualAssistantMainContentComponent } from './virtual-assistant-main-content/virtual-assistant-main-content.component';


@NgModule({
  declarations: [
    VirtualAssistantMainContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    //VIRTUAL-ASSISTANT-COMPONENTS-MODULE
    VirtualAssistantComponentsModule
  ],
  exports: [
    VirtualAssistantMainContentComponent
  ]
})
export class VirtualAssistantContentsModule { }
