import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
