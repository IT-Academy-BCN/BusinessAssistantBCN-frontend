import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import { ZoneModel } from 'src/app/models/common/zone.model';
import { BigMallsService } from 'src/app/services/big-malls.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-big-malls-page',
  templateUrl: './big-malls-page.component.html',
  styleUrls: ['./big-malls-page.component.css']
})
export class BigMallsPageComponent implements OnInit, OnDestroy {

  constructor(
    private commonService: CommonService,
    private bigMallsService: BigMallsService,
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
    this.bigMallsService.setZonesSelected( this.getZonesSelected() );
    this.bigMallsService.setActivitiesSelected( this.getActivitiesSelected() );
    
    // Log selected results to check everything is ok! These logs should be deleted
    console.log( 'Zones Selected: ', this.bigMallsService.zoneSelected );
    console.log( 'Activities Selected: ', this.bigMallsService.activitiesSelected );
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