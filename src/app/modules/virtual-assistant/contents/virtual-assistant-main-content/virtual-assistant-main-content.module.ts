// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

// SHARED-MODULE
import { SharedModule } from '../../../../shared/shared.module';

// VIRTUAL-ASSISTANT-COMPONENTS-MODULE
import { VirtualAssistantComponentsModule } from '../../components/virtual-assistant-components.module';

// VIRTUAL-ASSISTANT-MAIN-CONTENT-COMPONENT
import { VirtualAssistantMainContentComponent } from './component/virtual-assistant-main-content.component';

// RESUME-DIALOG-COMPONENT
import { ResumeDialogComponent } from './dialogs/resume-dialog/resume-dialog.component';

// SAVE-DIALOG-COMPONENT
import { SaveDialogComponent } from './dialogs/save-dialog/save-dialog.component';


@NgModule({
  declarations: [
    VirtualAssistantMainContentComponent,
    ResumeDialogComponent,
    SaveDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VirtualAssistantComponentsModule, 

    // MATERIAL
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    VirtualAssistantMainContentComponent
  ]
})
export class VirtualAssistantMainContentModule { }
