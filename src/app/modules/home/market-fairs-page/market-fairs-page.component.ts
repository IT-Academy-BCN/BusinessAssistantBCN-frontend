import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MarketFairsService } from '../../../services/market-fairs.service';
import { CommonService } from "../../../services/common.service";
import { ZoneModel } from "../../../models/common/zone.model";
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import {FormArray , FormBuilder , FormGroup} from "@angular/forms";


@Component({
  selector: 'app-market-fairs-page',
  templateUrl: './market-fairs-page.component.html',
  styleUrls: ['./market-fairs-page.component.css']
})
export class MarketFairsPageComponent implements OnInit, OnDestroy {
  constructor(
      private commonService: CommonService,
      private marketFairsService: MarketFairsService,
      private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.zones$ = this.commonService.getZones().subscribe( resp => {
      this.zones = resp.results;
      this.addFormArr('zonesForm', resp.results)
    })

    this.activities$ = this.commonService.getEconomicActivities().subscribe( resp => {
      this.activities = resp.results;
      this.addFormArr('activitiesForm', resp.results)
    })

  }

  ngOnDestroy(): void {
    this.zones$.unsubscribe();
    this.activities$.unsubscribe();
  }

  zones: ZoneModel[] = [];
  activities: EconomicActivityModel[]= [];

  //Subscriptions
  zones$!: Subscription;
  activities$!: Subscription;

  //Form
  bigMallsForm: FormGroup = this.fb.group({
    zonesForm: this.fb.array([]),
    activitiesForm: this.fb.array([])
  })

  addFormArr( form: string, itemsArr: any[] ){
    const formArr = this.bigMallsForm.get( form ) as FormArray;
    itemsArr.forEach( (_) => {
      formArr.push( this.fb.control(false) )
    })
  }

  getFormArr( formArr: string ){
    return this.bigMallsForm.get( formArr ) as FormArray;
  }

  //
  sendSelectedData() {
    this.marketFairsService.setZonesSelected( this.getZonesSelected() );
    this.marketFairsService.setActivitiesSelected( this.getActivitiesSelected() );

    // Log selected results to check everything is ok! These logs should be deleted
    console.log( 'Zones Selected: ', this.marketFairsService.zoneSelected );
    console.log( 'Activities Selected: ', this.marketFairsService.activitiesSelected );
  }

  getZonesSelected(): ZoneModel[]{
    return this.zones.filter( (zone, i) => {
      if( this.getFormArr('zonesForm').controls[i].value ){
        return zone
      }
      return
    })
  }

  getActivitiesSelected(): EconomicActivityModel[]{
    return this.activities.filter( (activity, i) => {
      if( this.getFormArr('activitiesForm').controls[i].value ){
        return activity
      }
      return
    })
  }
}

