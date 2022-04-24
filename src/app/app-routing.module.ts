import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import {VirtualAssistantPageComponent} from "./modules/virtual-assistant/virtual-assistant-page/virtual-assistant-page.component";
import { MyEnvironmentSearchDetailPageComponent } from './modules/home/my-environment-search-detail-page/my-environment-search-detail-page.component';
import { SavedSearchesComponent } from './modules/home/saved-searches/saved-searches.component';
import {MyEnvironmentSearchComponent} from "./modules/home/my-environment-search/my-environment-search.component";


// FUNCIONA 
const routes: Routes = [
    { path: 'home', component: HomePageComponent, data: { breadcrumb: null } },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: "login", component: LoginFormComponent },
    { path: 'my-environment', component: MyEnvironmentPageComponent, data: { breadcrumb: 'my-enviroment' },
      children: [
          {path:'my-environment-search',component:MyEnvironmentSearchComponent,data: {breadcrumb:'search'},
            children:[
                { path:'my-environment-search-detail',component:MyEnvironmentSearchDetailPageComponent,data:{breadcrumb:'results'} }
            ]
          }

      ]
    },
    { path: 'virtual-assistant', component: VirtualAssistantPageComponent, data: { breadcrumb: 'assistant' } },
    { path: "saved-searches", component: SavedSearchesComponent, data: { breadcrumb: 'save-results' } },
    { path: '**', component: HomePageComponent }
];



/*
const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "my-environment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAssistantComponent },
  { path: "my-environment-search-detail", component: MyEnvironmentSearchDetailPageComponent },
  { path: "saved-searches", component: SavedSearchesComponent },
  {path: "my-environment-search",component:MyEnvironmentSearchComponent}

];*/

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
