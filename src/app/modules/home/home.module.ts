import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { LargeStablishmentsPageComponent } from './large-stablishments-page/large-stablishments-page.component';
import { LargeStablishmentsDetailPageComponent } from './large-stablishments-detail-page/large-stablishments-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { VirtualAsisstantComponent } from './home-components/virtual-asisstant/virtual-asisstant.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    LargeStablishmentsPageComponent,
    LargeStablishmentsDetailPageComponent,
    InformationNavComponent,
    VirtualAsisstantComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
