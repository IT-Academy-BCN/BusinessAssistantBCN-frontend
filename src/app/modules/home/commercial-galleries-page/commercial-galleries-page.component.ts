import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import { ZoneModel } from 'src/app/models/common/zone.model';
import { CommonService } from 'src/app/services/common.service';
import {CommercialGalleriesService} from "../../../services/commercial-galleries.service";

@Component({
  selector: 'commercial-galleries-page',
  templateUrl: './commercial-galleries-page.component.html',
  styleUrls: ['./commercial-galleries-page.component.css']
})
export class CommercialGalleriesPageComponent implements OnInit, OnDestroy {

  constructor(
      private commonService: CommonService,
      private commercialGalleriesService: CommercialGalleriesService,
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
    this.commercialGalleriesService.setZonesSelected( this.getZonesSelected() );
    this.commercialGalleriesService.setActivitiesSelected( this.getActivitiesSelected() );

    // Log selected results to check everything is ok! These logs should be deleted
    console.log( 'Zones Selected: ', this.commercialGalleriesService.zoneSelected );
    console.log( 'Activities Selected: ', this.commercialGalleriesService.activitiesSelected );
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
