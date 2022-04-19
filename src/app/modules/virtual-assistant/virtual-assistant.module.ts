import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualAssistantDataSaveComponent } from './virtual-assistant-data-save/virtual-assistant-data-save.component';
//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import { VirtualAssistantPageComponent } from './virtual-assistant-page/virtual-assistant-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VirtualAssistantDataSaveComponent,
    VirtualAssistantPageComponent
  ],
  exports: [
    VirtualAssistantDataSaveComponent,
    VirtualAssistantPageComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    SharedModule
  ]
})
export class VirtualAssistantModule { }
