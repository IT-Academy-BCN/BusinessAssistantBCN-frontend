import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

// SHARED-MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENT - VIRTUAL-ASSISTANT-BUTTONS-CONTAINER
import { VirtualAssistantButtonsContainerComponent } from './component/virtual-assistant-buttons-container.component';


@NgModule({
  declarations: [
    VirtualAssistantButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    // MATERIAL
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [
    VirtualAssistantButtonsContainerComponent
  ]
})
export class VirtualAssistantButtonsContainerModule { }
