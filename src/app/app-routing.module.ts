import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./helpers/JwtInterceptor";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
