import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { LargeStablishmentsPageComponent } from './large-stablishments-page/large-stablishments-page.component';
import { LargeStablishmentsDetailPageComponent } from './large-stablishments-detail-page/large-stablishments-detail-page.component';
import { HttpLoaderFactory, SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { VirtualAssistantComponent } from './home-components/virtual-assistant/virtual-assistant.component';
import { RouterModule } from '@angular/router';
import { BusinessAssistantComponent } from './business-assistant/business-assistant.component';
import { BusinessAssitantDataSaveComponent } from './business-assitant-data-save/business-assitant-data-save.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    LargeStablishmentsPageComponent,
    LargeStablishmentsDetailPageComponent,
    InformationNavComponent,
    VirtualAssistantComponent,
    BusinessAssistantComponent,
    BusinessAssitantDataSaveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
