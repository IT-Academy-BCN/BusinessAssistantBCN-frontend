import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";
import {ZoneModel} from "../../../models/common/zone.model";
import {EconomicActivityModel} from "../../../models/common/economic-activity.model";

@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
  styleUrls: ['./my-environment-search.component.css']
})
export class MyEnvironmentSearchComponent implements OnInit {
  zones:ZoneModel[];
  activities:EconomicActivityModel[];

  constructor(
      private commonService:CommonService
  ) { }

  ngOnInit(): void {
    this.getAllActivities()
    this.getAllZones()
  }

  checkZones(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.commonService.zones.push(zoneSelected);
    } else {
      this.commonService.zones.splice(this.commonService.zones.indexOf(zoneSelected),1);
    }
  }

  checkActivities(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      this.commonService.activities.push(activitySelected);
    } else {
      this.commonService.activities.splice(this.commonService.activities.indexOf(activitySelected),1);
    }
  }

  getAllZones(){
    this.commonService.getZones().subscribe(response=>{
      this.zones=response.results;
    })
  }

  getAllActivities(){
    this.commonService.getEconomicActivities().subscribe(response=>{
      this.activities=response.results;
    })
  }

}
