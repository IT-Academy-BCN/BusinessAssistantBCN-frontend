// ANGULAR CORE & COMMON
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SHARED-MODULE
import { SharedModule } from 'src/app/shared/shared.module';

// VIRTUAL-ASSISTANT-CONTENTS-MODULE
import { VirtualAssistantContentsModule } from './contents/virtual-assistant-contents.module';

// VIRTUAL-ASSISTANT-PAGE
import { VirtualAssistantPageComponent } from './virtual-assistant-page/virtual-assistant-page.component';

// VIRTUAL-ASSISTANT-CATEGORIES-SERVICE
import { VirtualAssisstantCategoriesService } from './services/virtual-assisstant-categories.service';


// ARRAY with VIRTUAL-ASSISTANT APPLICATION PAGES
const VirtualAssistantPages = [
  VirtualAssistantPageComponent
];


@NgModule({
  declarations: [
    [...VirtualAssistantPages]
  ],
  imports: [
    CommonModule,
    SharedModule,

    // VIRTUAL-ASSISTANT-CONTENTS-MODULE
    VirtualAssistantContentsModule

  ],
  exports: [
    [...VirtualAssistantPages]
  ],
  providers: [
    VirtualAssisstantCategoriesService
  ]
})
export class VirtualAssistantModule { }
