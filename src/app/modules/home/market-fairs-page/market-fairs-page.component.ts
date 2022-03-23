import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MarketFairsService } from '../../../services/market-fairs.service';
import { CommonService } from "../../../services/common.service";
import { ZoneModel } from "../../../models/common/zone.model";
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import { MarketFairModel} from './../../../models/market-fair.model';


@Component({
  selector: 'app-market-fairs-page',
  templateUrl: './market-fairs-page.component.html',
  styleUrls: ['./market-fairs-page.component.css']
})
export class MarketFairsPageComponent implements OnInit, OnDestroy {


  //Subscriptions
  zones$!: Subscription;
  activities$!: Subscription;
  largeStablishments$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];
  largeStablishmentActivities: EconomicActivityModel[] = [];



  get bcnZonesSelected() {
    return this.marketFairsService.bcnZonesSelected;
  }

  get activitiiesSelected() {
    return this.marketFairsService.activitiesSelected;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private marketFairsService: MarketFairsService,
              private commonService: CommonService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.marketFairsService.initializeSelected();
  }

  ngOnDestroy() {
    if (this.zones$ != undefined) this.zones$.unsubscribe();
  }

  loadMasterData() {
    this.zones$ = this.commonService.getZones().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const bcnZone: ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });
    });
    this.activities$ = this.commonService.getEconomicActivities().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const largeStablishmentActivity: EconomicActivityModel = new EconomicActivityModel(element);
        this.largeStablishmentActivities.push(largeStablishmentActivity);
      });
    });
  }

  largeStablishmentZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.marketFairsService.addZonesSelected(zoneSelected);
    } else {
      this.marketFairsService.deleteZoneSelected(zoneSelected);
    }
    console.log(this.bcnZonesSelected);
  }

  largeStablishmentActivitySelected(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      this.marketFairsService.addActivitiesSelected(activitySelected)
    } else {
      this.marketFairsService.deleteActivitySelected(activitySelected)
    }
    console.log(this.activitiiesSelected);
  }



  largeStablishmentSearch() {
    // this.largeStablishments$ =
    this.marketFairsService.sendSelectedData()
        .subscribe((resp: any) => {
          console.log(resp)
        });

  }

  largeStablishmentActivitySearch() {
    console.log(this.largeStablishmentActivities);
  }
}

