import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    PagesComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class PagesModule { }
