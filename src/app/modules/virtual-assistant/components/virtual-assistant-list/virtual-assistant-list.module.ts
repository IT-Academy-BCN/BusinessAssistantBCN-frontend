// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED-MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENT VIRTUAL-ASSISTANT-LIST
import { VirtualAssistantListComponent } from './component/virtual-assistant-list.component';


@NgModule({
  declarations: [
    VirtualAssistantListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VirtualAssistantListComponent
  ]
})
export class VirtualAssistantListModule { }
