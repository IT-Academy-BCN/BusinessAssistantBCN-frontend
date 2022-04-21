import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualAssistantDataSaveComponent } from './virtual-assistant-data-save/virtual-assistant-data-save.component';
import { VirtualAssistantPageComponent } from './virtual-assistant-page/virtual-assistant-page.component';
//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import { SharedModule } from 'src/app/shared/shared.module';
import { VirtualAssistantComponentsModule } from './components/virtual-assistant-components.module';


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
    SharedModule,
    VirtualAssistantComponentsModule
  ]
})
export class VirtualAssistantModule { }
