import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';

import { HttpLoaderFactory, SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { RouterModule } from '@angular/router';
import { SavedSearchesComponent } from './saved-searches/saved-searches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MyEnvironmentSearchDetailPageComponent } from './my-environment-search-detail-page/my-environment-search-detail-page.component';

import { MyEnvironmentSearchComponent } from './my-environment-search/my-environment-search.component';








@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    InformationNavComponent,
    MyEnvironmentSearchDetailPageComponent,
    SavedSearchesComponent,
    MyEnvironmentSearchComponent

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
