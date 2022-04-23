// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';

// SHARED-MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENT VIRTUAL-ASSISTANT-TREE
import { VirtualAssistantTreeComponent } from './component/virtual-assistant-tree.component';


@NgModule({
  declarations: [
    VirtualAssistantTreeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    // MATERIAL
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule
  ],
  exports: [
    VirtualAssistantTreeComponent
  ]
})
export class VirtualAssistantTreeModule { }