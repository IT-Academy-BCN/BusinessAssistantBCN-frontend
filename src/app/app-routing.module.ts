import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { LargeStablishmentsPageComponent } from './modules/home/large-stablishments-page/large-stablishments-page.component';
import { VirtualAssistantComponent } from './modules/home/home-components/virtual-assistant/virtual-assistant.component';
import { MyEnvironmentSearchDetailPageComponent } from './modules/home/my-environment-search-detail-page/my-environment-search-detail-page.component';
import { CommercialGalleriesPageComponent } from './modules/home/commercial-galleries-page/commercial-galleries-page.component';
import { BigMallsPageComponent } from './modules/home/big-malls-page/big-malls-page.component';
import { MunicipalMarketsPageComponent } from './modules/home/municipal-markets-page/municipal-markets-page.component';
import { MarketFairsPageComponent } from './modules/home/market-fairs-page/market-fairs-page.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "my-environment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAssistantComponent },
  { path: "large-stablishments", component: LargeStablishmentsPageComponent },
  { path: "commercial-galleries", component: CommercialGalleriesPageComponent },
  { path: "big-malls", component: BigMallsPageComponent },
  { path: "municipal-markets", component: MunicipalMarketsPageComponent },
  { path: "market-fairs", component: MarketFairsPageComponent },
  { path: "my-environment-search-detail", component: MyEnvironmentSearchDetailPageComponent },


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
