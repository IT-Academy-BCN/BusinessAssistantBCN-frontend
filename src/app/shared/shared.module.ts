import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    


  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
