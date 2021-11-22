import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { AboutComponent } from './modules/components/about/about.component';
import { OfferComponent } from './modules/components/offer/offer.component';
import { CommonQuestionsComponent } from './modules/components/common-questions/common-questions.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  { path: "about", component: AboutComponent },
  { path: "offer", component: OfferComponent },
  { path: "commonQuestions", component: CommonQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
