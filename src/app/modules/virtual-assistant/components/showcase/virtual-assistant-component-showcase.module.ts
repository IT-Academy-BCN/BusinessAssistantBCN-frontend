// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

// CDK
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LayoutModule } from '@angular/cdk/layout';

// COMPONENT VIRTUAL-ASSISTANT-SHOWCASE
import { VirtualAssistantShowcaseComponent } from './virtual-assistant-showcase.component';

// MODULES VIRTUAL-ASSISTANT-COMPONENTS
import { VirtualAssistantAccordionModule } from '../virtual-assistant-accordion/virtual-assistant-accordion.module';
import { VirtualAssistantButtonsContainerModule } from '../virtual-assistant-buttons-container/virtual-assistant-buttons-container.module';
import { VirtualAssistantContainerModule } from '../virtual-assistant-container/virtual-assistant-container.module';
import { VirtualAssistantListModule } from '../virtual-assistant-list/virtual-assistant-list.module';
import { VirtualAssistantTreeModule } from '../virtual-assistant-tree/virtual-assistant-tree.module';

// COMPONENT TABS SHOWED IN virtual-assistant-showcase.component.ts
import { TabVaAccordionComponent } from './tabs/tab-va-accordion.component';
import { TabVaButtonsContainerComponent } from './tabs/tab-va-buttons-container.component';
import { TabVaContainerComponent } from './tabs/tab-va-container.component';
import { TabVaListComponent } from './tabs/tab-va-list.component';
import { TabVaTreeComponent } from './tabs/tab-va-tree.component';
import { TabSandboxComponent } from './tabs/tab-sandbox.component';

// MICROCOMPONENTS USED BY TABS
import { CodeCopyContainerComponent } from './tabs/microcomponents/code-copy-container.component';
import { CaseTitleComponent } from './tabs/microcomponents/case-title.component';
import { TabShowcaseComponent } from './tabs/tab-showcase.component';


@NgModule({
  declarations: [
    VirtualAssistantShowcaseComponent,
    TabVaAccordionComponent,
    TabVaButtonsContainerComponent,
    TabVaContainerComponent,
    TabVaListComponent,
    TabVaTreeComponent,
    TabShowcaseComponent,
    TabSandboxComponent,
    CodeCopyContainerComponent,
    CaseTitleComponent
  ],
  imports: [
    CommonModule,

    // MATERIAL
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTabsModule,

    // CDK
    ClipboardModule,
    LayoutModule,

    // MODULES VIRTUAL-ASSISTANT-COMPONENTS
    VirtualAssistantAccordionModule,
    VirtualAssistantButtonsContainerModule,
    VirtualAssistantContainerModule,
    VirtualAssistantListModule,
    VirtualAssistantTreeModule
  ],
  exports: [
    VirtualAssistantShowcaseComponent
  ]
})
export class VirtualAssistantComponentShowcaseModule { }
