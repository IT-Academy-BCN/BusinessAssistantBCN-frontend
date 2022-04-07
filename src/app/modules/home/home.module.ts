import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { LargeStablishmentsPageComponent } from './large-stablishments-page/large-stablishments-page.component';
import { HttpLoaderFactory, SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { VirtualAssistantComponent } from './home-components/virtual-assistant/virtual-assistant.component';
import { RouterModule } from '@angular/router';
import { BusinessAssistantComponent } from './business-assistant/business-assistant.component';
import { BusinessAssitantDataSaveComponent } from './business-assitant-data-save/business-assitant-data-save.component';

import { SavedSearchesComponent } from './saved-searches/saved-searches.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MyEnvironmentSearchDetailPageComponent } from './my-environment-search-detail-page/my-environment-search-detail-page.component';
import { CommercialGalleriesPageComponent } from './commercial-galleries-page/commercial-galleries-page.component';
import { BigMallsPageComponent } from './big-malls-page/big-malls-page.component';
import { MunicipalMarketsPageComponent } from './municipal-markets-page/municipal-markets-page.component';
import { MarketFairsPageComponent } from './market-fairs-page/market-fairs-page.component';






@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    LargeStablishmentsPageComponent,
    InformationNavComponent,
    VirtualAssistantComponent,
    MyEnvironmentSearchDetailPageComponent,
    CommercialGalleriesPageComponent,
    BigMallsPageComponent,
    MunicipalMarketsPageComponent,
    MarketFairsPageComponent,
    SavedSearchesComponent,
    BusinessAssistantComponent,
    BusinessAssitantDataSaveComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
