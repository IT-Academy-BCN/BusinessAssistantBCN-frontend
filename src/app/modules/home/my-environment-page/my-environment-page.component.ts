import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
import { BreadcrumbService } from '../../../services/breadcrumb.service';

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

  constructor(private commonService:CommonService,private breadcrumbService: BreadcrumbService) { }
  get breadcrumbs(){
    return this.breadcrumbService.breadcrumbs;
  }



  ngOnInit(): void {
  }

  setCurrentBusiness(businessModel:string){
    this.commonService.currentBusiness.next(businessModel)
    console.log(businessModel)
  }

}
