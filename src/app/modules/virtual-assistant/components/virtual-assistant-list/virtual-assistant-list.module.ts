// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

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
    SharedModule,

    // MATERIAL
    MatDividerModule,
    MatListModule
  ],
  exports: [
    VirtualAssistantListComponent
  ]
})
export class VirtualAssistantListModule { }
