import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,


  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
