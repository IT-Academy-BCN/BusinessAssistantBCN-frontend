import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.css']
})
export class MyEnvironmentPageComponent implements OnInit {


  largeStablishmentsPic = "assets/img/shopping-mall.png";
  commercialGalleriesPic = "assets/img/market.png";
  bigMallsPic = "assets/img/mall-shopping-cart.png";
  municipalMarketsPic = "assets/img/shop.png";
  marketFairsPic = "assets/img/cans.png"

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  setCurrentBusiness(businessModel:string){
    this.commonService.currentBusiness.next(businessModel)
    console.log(businessModel)
  }

}
