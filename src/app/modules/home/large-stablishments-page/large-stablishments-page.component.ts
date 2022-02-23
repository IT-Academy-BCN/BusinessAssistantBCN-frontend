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



  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private largeStablishmentsService: LargeStablishmentsService,
              private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.loadActivityData();
  }

  ngOnDestroy() {
    if( this.zones$ != undefined ) this.zones$.unsubscribe();
  }

  loadMasterData(){
    this.zones$ = this.commonservice.getZones().subscribe( resp => {

      console.log(resp);
/*      resp.forEach ( (element:any) => {
        const bcnZone:ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });*/
    });
  }

  loadActivityData () {
    this.activities$ = this.commonservice.getEconomicActivities().subscribe( resp => {

      console.log(resp);
/*      resp.forEach ( (element:any) => {
        const largeStablishmentActivity:EconomicActivityModel = new EconomicActivityModel(element);
        this.largeStablishmentActivities.push(largeStablishmentActivity);
      });*/
    });
  }

  largeStablishmentSearch() {
    console.log( this.bcnZones );

  }

  largeStablishmentActivitySearch() {
    console.log( this.largeStablishmentActivities );
  }
}
