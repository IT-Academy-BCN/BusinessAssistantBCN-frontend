// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from "rxjs";
// import { ActivatedRoute, Router } from "@angular/router";
// import { LargeStablishmentsService } from '../../../services/large-stablishments.service';
// import { CommonService } from "../../../services/common.service";
// import { ZoneModel } from "../../../models/common/zone.model";
// import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
// import { LargeStablishmentModel } from '../../../models/large-stablishment.model';
// import { FilteredDataModel } from 'src/app/models/common/filtered-data.model';

// @Component({
//   selector: 'app-large-stablishments-page',
//   templateUrl: './large-stablishments-page.component.html',
//   styleUrls: ['./large-stablishments-page.component.css']
// })
// export class LargeStablishmentsPageComponent implements OnInit, OnDestroy {


//   //Subscriptions
//   zones$!: Subscription;
//   activities$!: Subscription;

//   //Other elements
//   bcnZones: ZoneModel[] = [];
//   largeStablishmentActivities: EconomicActivityModel[] = [];

//   //Options checked
//   largeStablishmentActivitiesSelected: EconomicActivityModel[] = [];
//   idZonaSelected: number[] = [];
//   idActivitySelected: number[] = [];
//   largeStablishmentselected: FilteredDataModel = new FilteredDataModel(this.idZonaSelected, this.idActivitySelected)
//   largeStablishmentSelectedJSON = '';

//   get bcnZonesSelected() {
//     return this.largeStablishmentsService.bcnZonesSelected;
//   }

//   constructor(private router: Router,
//     private activatedRoute: ActivatedRoute,
//     private largeStablishmentsService: LargeStablishmentsService,
//     private commonservice: CommonService) { }

//   ngOnInit(): void {
//     this.loadMasterData();
//     this.largeStablishmentsService.initializeZonesSelected();
//   }

//   ngOnDestroy() {
//     if (this.zones$ != undefined) this.zones$.unsubscribe();
//   }

//   loadMasterData() {
//     this.zones$ = this.commonservice.getZones().subscribe(resp => {

//       // console.log(resp);
//       resp.results.forEach((element: any) => {
//         const bcnZone: ZoneModel = new ZoneModel(element);
//         this.bcnZones.push(bcnZone);
//       });
//     });
//     this.activities$ = this.commonservice.getEconomicActivities().subscribe(resp => {

//       // console.log(resp);
//       resp.results.forEach((element: any) => {
//         const largeStablishmentActivity: EconomicActivityModel = new EconomicActivityModel(element);
//         this.largeStablishmentActivities.push(largeStablishmentActivity);
//       });
//     });
//   }

//   largeStablishmentZonesSelected(zoneSelected: ZoneModel, event: any) {
//     if (event.checked) {
//       this.largeStablishmentsService.addZonesSelected(zoneSelected);
//     } else {
//       this.largeStablishmentsService.deleteZoneSelected(zoneSelected);
//     }
//     console.log(this.bcnZonesSelected);
//     this.idZonaSelected = this.bcnZonesSelected.map(data => data.idZone);
//     console.log(this.idZonaSelected);
//   }

//   largeStablishmentActivitySelected(activitySelected: EconomicActivityModel, event: any) {
//     if (event.checked) {
//       this.largeStablishmentActivitiesSelected.push(activitySelected);
//     } else {
//       this.deleteActivitySelected(activitySelected);
//     }
//     // console.log(this.largeStablishmentActivitiesSelected);
//     this.idActivitySelected = this.largeStablishmentActivitiesSelected.map(data => data.idActivity);
//     console.log(this.idActivitySelected)
//   }

//   deleteActivitySelected(activitySelected: EconomicActivityModel) {
//     this.largeStablishmentActivitiesSelected.map((activity, index) => {
//       if (activity === activitySelected) {
//         this.largeStablishmentActivitiesSelected.splice(index, 1);
//       }
//     });
//   }


//   largeStablishmentSearch() {
  
//     this.largeStablishmentselected.activities = this.idActivitySelected;
//     this.largeStablishmentselected.zones = this.idZonaSelected;
//     console.log(this.largeStablishmentselected)
//     this.largeStablishmentSelectedJSON = JSON.stringify(this.largeStablishmentselected);
//    console.log( this.largeStablishmentsService.sendSelectedData())
//    //console.log(this.largeStablishmentSelectedJSON)
//   }

//   largeStablishmentActivitySearch() {
//     console.log(this.largeStablishmentActivities);
//   }
// }

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { LargeStablishmentsService } from '../../../services/large-stablishments.service';
import { CommonService} from "../../../services/common.service";
import {ZoneModel} from "../../../models/common/zone.model";
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';

@Component({
  selector: 'app-large-stablishments-page',
  templateUrl: './large-stablishments-page.component.html',
  styleUrls: ['./large-stablishments-page.component.css']
})
export class LargeStablishmentsPageComponent implements OnInit, OnDestroy {


  //Subscriptions
  zones$!: Subscription;
  activities$!: Subscription;

  //Other elements
  bcnZones: ZoneModel [] = [];
  largeStablishmentActivities: EconomicActivityModel [] = [];

  //Options checked
  largeStablishmentActivitiesSelected: EconomicActivityModel [] = [];

  get bcnZonesSelected() {
    return this.largeStablishmentsService.bcnZonesSelected;
  }

  get activitiiesSelected(){
    return this.largeStablishmentsService.activitiesSelected;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private largeStablishmentsService: LargeStablishmentsService,
              private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.largeStablishmentsService.initializeSelected();
  }

  ngOnDestroy() {
    if( this.zones$ != undefined ) this.zones$.unsubscribe();
  }

  loadMasterData(){
    this.zones$ = this.commonservice.getZones().subscribe( resp => {

      // console.log(resp);
      resp.results.forEach ( (element:any) => {
        const bcnZone:ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });
    });
    this.activities$ = this.commonservice.getEconomicActivities().subscribe( resp => {

      // console.log(resp);
      resp.results.forEach ( (element:any) => {
        const largeStablishmentActivity:EconomicActivityModel = new EconomicActivityModel(element);
        this.largeStablishmentActivities.push(largeStablishmentActivity);
      });
    });
  }

  largeStablishmentZonesSelected(zoneSelected: ZoneModel, event: any) {
    if(event.checked){
      this.largeStablishmentsService.addZonesSelected(zoneSelected);
    }else{
      this.largeStablishmentsService.deleteZoneSelected(zoneSelected);
    }
    console.log(this.bcnZonesSelected);
  }

  largeStablishmentActivitySelected(activitySelected: EconomicActivityModel, event: any) {
    if(event.checked){
      this.largeStablishmentsService.addActivitiesSelected(activitySelected)
    }else{
      this.largeStablishmentsService.deleteActivitySelected(activitySelected)
    }
    console.log(this.activitiiesSelected);
  }



  largeStablishmentSearch() {
   // console.log( this.bcnZones );
 this.largeStablishmentsService.sendSelectedData();
 this.largeStablishmentsService.initializeSelected();
  }

  largeStablishmentActivitySearch() {
    console.log( this.largeStablishmentActivities );
  }
}
