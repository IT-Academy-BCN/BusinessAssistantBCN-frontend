
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { LargeStablishmentsService } from '../../../services/large-stablishments.service';
import { CommonService } from "../../../services/common.service";
import { ZoneModel } from "../../../models/common/zone.model";
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
  largeStablishments$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];
  largeStablishmentActivities: EconomicActivityModel[] = [];

    //Options checked
    public _bcnZonesSelected: number[] = [];
    public _activitiesSelected: number[] = [];



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private largeStablishmentsService: LargeStablishmentsService,
    private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.initializeSelected();
  }

  ngOnDestroy() {
    if (this.zones$ != undefined) this.zones$.unsubscribe();
  }

  
  initializeSelected() {
    this._bcnZonesSelected = [];
    this._activitiesSelected = [];
  }

  loadMasterData() {
    this.zones$ = this.commonservice.getZones().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const bcnZone: ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });
    });
    this.activities$ = this.commonservice.getEconomicActivities().subscribe(resp => {
      // console.log(resp);
      resp.results.forEach((element: any) => {
        const largeStablishmentActivity: EconomicActivityModel = new EconomicActivityModel(element);
        this.largeStablishmentActivities.push(largeStablishmentActivity);
      });
    });
  }

  largeStablishmentZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this._bcnZonesSelected.push(zoneSelected.idZone)
    } else {
      this._bcnZonesSelected.map((zone, index) => {
        if (zone === zoneSelected.idZone) {
          this._bcnZonesSelected.splice(index, 1);
        }
      });
    }
    console.log(this._bcnZonesSelected);
  }

  largeStablishmentActivitySelected(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      this._activitiesSelected.push(activitySelected.idActivity);
    } else {
      this._activitiesSelected.map((activity, index) => {
        activity === activitySelected.idActivity ? this._activitiesSelected.splice(index, 1) : null;
      })
    }
    console.log(this._activitiesSelected);
  }



  largeStablishmentSearch() {
    // this.largeStablishments$ =
    this.commonservice.largeStablishmentsClicked=true;
    this.largeStablishmentsService.sendSelectedData(this._bcnZonesSelected, this._activitiesSelected)
      .subscribe((resp: any) => {
        console.log(resp)
      });

  }

}


