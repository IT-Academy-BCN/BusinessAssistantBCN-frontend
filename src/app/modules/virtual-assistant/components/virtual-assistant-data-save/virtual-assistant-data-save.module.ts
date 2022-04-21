import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENT
import { VirtualAssistantDataSaveComponent } from './component/virtual-assistant-data-save.component';


@NgModule({
  declarations: [
    VirtualAssistantDataSaveComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VirtualAssistantDataSaveComponent
  ]
})
export class VirtualAssistantDataSaveModule { }
