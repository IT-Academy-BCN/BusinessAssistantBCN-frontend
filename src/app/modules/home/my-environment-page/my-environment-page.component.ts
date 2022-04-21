import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  showBusinessModelPage(businessModel:string){
    this.router.navigate([`my-environment-search/${businessModel}`])
  }

}
