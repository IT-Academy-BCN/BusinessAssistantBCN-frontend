import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-my-environment-page',
  templateUrl: './my-environment-page.component.html',
  styleUrls: ['./my-environment-page.component.css']
})
export class MyEnvironmentPageComponent implements OnInit {


  largeEstablishment = "assets/img/shopping-mall.png";
  shoppingMall = "assets/img/market.png";
  shoppingCart = "assets/img/mall-shopping-cart.png";
  commercialMarket = "assets/img/shop.png";
  fairMarkets = "assets/img/cans.png"

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  setCurrentBusiness(businessModel:string){
    this.commonService.currentBusiness.next(businessModel)
    console.log(businessModel)
  }

}
