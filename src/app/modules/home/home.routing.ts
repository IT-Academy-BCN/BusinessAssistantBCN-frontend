import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { HomePageComponent } from './home-page/home-page.component';
import { BigStablishmentsDetailPageComponent } from './big-stablishments-detail-page/big-stablishments-detail-page.component';
import { BigStablishmentsPageComponent } from './big-stablishments-page/big-stablishments-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';




const routes: Routes = [
    { 
        path: 'dashboard', 
        component: HomePageComponent,
        
        children: [
            { path: '', component: HomePageComponent, data: { titulo: 'Homepage' } },
            { path: 'big-stablishments-detail', component: BigStablishmentsDetailPageComponent, data: { titulo: 'BigStablishmentsDetailPage' }},
            { path: 'big-stablishments', component: BigStablishmentsPageComponent, data: { titulo: 'Big stablishments' }},
            { path: 'myEnviroment', component: MyEnvironmentPageComponent, data: { titulo: 'myEnviroment Page' }},
           
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}


