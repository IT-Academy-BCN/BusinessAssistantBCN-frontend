import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageChangerComponent } from './language-changer/language-changer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LanguageChangerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule
  ]
})
export class SharedModule { 

  constructor( translate: TranslateService) {
    translate.addLangs(['en', 'es','ca']);
    // translate.setDefaultLang('ca');
    translate.use('es');
  }

}
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
