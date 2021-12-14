import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BigStablishmentsDetailPageComponent } from './modules/home/big-stablishments-detail-page/big-stablishments-detail-page.component';
import { BigStablishmentsPageComponent } from './modules/home/big-stablishments-page/big-stablishments-page.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  { path: "directory", component: MyEnvironmentPageComponent },
  { path: "login", component: LoginFormComponent },
  { path: "menu", component: MenuComponent },
  { path: "big-stablishments-detail", component: BigStablishmentsDetailPageComponent },
  { path: "big-stablishments", component: BigStablishmentsPageComponent },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
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
