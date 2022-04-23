import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageChangerComponent } from './language-changer/language-changer.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ObserverIntersectionDirective} from "./directives/observer-interceptor.directive";
import {MapboxComponent} from "./mapbox/mapbox.component";
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
      MapboxComponent,
    MenuComponent,
    LanguageChangerComponent,
      ObserverIntersectionDirective,
      BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
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
    TranslateModule,
    ObserverIntersectionDirective,
    MapboxComponent,
    BreadcrumbComponent,
  ]
})
export class SharedModule { 

  constructor( translate: TranslateService) {
    translate.addLangs(['en', 'es','ca']);
    translate.setDefaultLang('ca');
  }

}
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
