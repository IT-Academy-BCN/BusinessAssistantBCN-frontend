import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { resourceUsage } from 'process';
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
  ) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.bigMallsService.initializeSelected();
  }

  ngOnDestroy(): void {
      this.zones$.unsubscribe();
      this.activities$.unsubscribe();
  }

  // Data Arrays
  zones: ZoneModel[] = [];
  activities: EconomicActivityModel[]= [];

  //Subscriptions
  zones$!: Subscription;
  activities$!: Subscription;

  get zonesSelected() {
    return this.bigMallsService.zoneSelected
  }

  loadMasterData() {
    this.zones$ = this.commonService.getZones().subscribe( resp => {
      resp.results.forEach( (item: any) => {
        const bcnZone: ZoneModel = new ZoneModel(item);
        this.zones.push( bcnZone )
      })
    })
    this.activities$ = this.commonService.getEconomicActivities().subscribe( resp => {
      resp.results.forEach( (item: any) => {
        const activity: EconomicActivityModel = new EconomicActivityModel(item);
        this.activities.push( activity );
      })
    })
  }

  bigMallsZonesSelected( zoneSelected: ZoneModel, event: any ){
    if( event.checked ){
      this.bigMallsService.addZonesSelected( zoneSelected );
    } else {
      this.bigMallsService.deleteZoneSelected( zoneSelected );
    }
    console.log( this.zonesSelected );
  }

  bigMallsSearch() {
    this.commonService.bigMalssClicked = true;
    this.bigMallsService.sendSelectedData().subscribe( console.log );
  }

}