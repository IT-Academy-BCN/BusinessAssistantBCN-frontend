import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from '../components/about/about.component';
import { OfferComponent } from '../components/offer/offer.component';
import { CommonQuestionsComponent } from '../components/common-questions/common-questions.component';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    OfferComponent,
    CommonQuestionsComponent,
    InformationNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    AboutComponent,
    OfferComponent,
    CommonQuestionsComponent
  ]
})
export class HomeModule { }
