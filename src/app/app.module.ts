import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './helpers/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
