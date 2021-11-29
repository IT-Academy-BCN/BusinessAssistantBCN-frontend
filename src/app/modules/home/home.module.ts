import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
