import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";

import { LoginRoutingModule } from './modules/login/login.routing';

import { HomeRoutingModule } from './modules/home/home.routing';
import { HomePageComponent } from './modules/home/home-page/home-page.component';



const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    LoginRoutingModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
