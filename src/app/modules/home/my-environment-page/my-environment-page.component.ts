import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {subscribeOn, Subscription} from "rxjs";

@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.css']
})
export class MyEnvironmentPageComponent implements OnInit {


  largeEstablishment = "assets/img/shopping-mall.png";
  commercialGalleriesPic = "assets/img/market.png";
  bigMallsPic = "assets/img/mall-shopping-cart.png";
  municipalMarketsPic = "assets/img/shop.png";
  marketFairsPic = "assets/img/cans.png"

  testProxy$!: Subscription;

  constructor(private commonService:CommonService,
              private breadcrumbService: BreadcrumbService,
              private http: HttpClient) { }
  get breadcrumbs(){
    return this.breadcrumbService.breadcrumbs;
  }


//test
  ngOnInit(): void {

    /*let urlTest:String = 'https://fakecontactsspq.z6.web.core.windows.net/contactos.json';*/

  let urlTest:String = '/api';
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/*    this.testProxy$ = this.http.get(
      `${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`)
      .subscribe( resp => {
        console.log(JSON.stringify(resp));
      });*/
    this.testProxy$ = this.http.get(
      `${urlTest}`)
      .subscribe( resp => {
        console.log(JSON.stringify(resp));
      });


  }

  setCurrentBusiness(businessModel:string){
    this.commonService.currentBusiness.next(businessModel)
    console.log(businessModel)
  }

}
