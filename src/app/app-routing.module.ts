import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LargeStablishmentsDetailPageComponent } from './modules/home/large-stablishments-detail-page/large-stablishments-detail-page.component';
import { LargeStablishmentsPageComponent } from './modules/home/large-stablishments-page/large-stablishments-page.component';
import { VirtualAsisstantComponent } from './modules/home/home-components/virtual-asisstant/virtual-asisstant.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "myEnvironment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAsisstantComponent },
  { path: "big-stablishments", component: LargeStablishmentsPageComponent },
  { path: "big-stablishments-detail", component: LargeStablishmentsDetailPageComponent },


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
