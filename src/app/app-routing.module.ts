import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LargeStablishmentsDetailPageComponent } from './modules/home/large-stablishments-detail-page/large-stablishments-detail-page.component';
import { LargeStablishmentsPageComponent } from './modules/home/large-stablishments-page/large-stablishments-page.component';
import { VirtualAssistantComponent } from './modules/home/home-components/virtual-assistant/virtual-assistant.component';
import { BusinessAssistantComponent } from './modules/home/business-assistant/business-assistant.component';
import { SavedSearchesComponent } from './modules/home/saved-searches/saved-searches.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "my-environment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAssistantComponent },
  { path: "business-assistant", component: BusinessAssistantComponent},
  { path: "large-stablishments", component: LargeStablishmentsPageComponent },
  { path: "large-stablishments-detail", component: LargeStablishmentsDetailPageComponent },
  { path: "saved-searches", component: SavedSearchesComponent },

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
