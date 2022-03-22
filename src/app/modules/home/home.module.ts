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
<<<<<<< HEAD
import { MapboxComponent } from './mapbox/mapbox.component';
import { BusinessAssistantComponent } from './business-assistant/business-assistant.component';
import { BusinessAssitantDataSaveComponent } from './business-assitant-data-save/business-assitant-data-save.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> bf7d04bf6844cd344d389e9da5b1e1f2f2fb1dd2





@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    LargeStablishmentsPageComponent,
    LargeStablishmentsDetailPageComponent,
    InformationNavComponent,
    VirtualAssistantComponent,
<<<<<<< HEAD
    MapboxComponent,
    BusinessAssistantComponent,
    BusinessAssitantDataSaveComponent
=======


>>>>>>> bf7d04bf6844cd344d389e9da5b1e1f2f2fb1dd2
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
