import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { BigStablishmentsPageComponent } from './big-stablishments-page/big-stablishments-page.component';
import { BigStablishmentsDetailPageComponent } from './big-stablishments-detail-page/big-stablishments-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { VirtualAsisstantComponent } from './home-components/virtual-asisstant/virtual-asisstant.component';


@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    BigStablishmentsPageComponent,
    BigStablishmentsDetailPageComponent,
    InformationNavComponent,
    VirtualAsisstantComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
