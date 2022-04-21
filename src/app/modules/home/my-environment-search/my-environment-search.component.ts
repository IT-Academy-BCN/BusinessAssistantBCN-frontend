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
  zones:ZoneModel[]; //zones will store all the available zones before any selection
  activities:EconomicActivityModel[]; //activities will store all the available economic activities before any selection

  constructor(
      private commonService:CommonService
  ) { }

  ngOnInit(): void {
    this.getAllActivities() //gets all the activities available from the common service
    this.getAllZones() //gets all the zones available from the common service
  }

  checkZones(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      //Adds the selected zone to the array zones in the common service to use it there as parameter
      this.commonService.zones.push(zoneSelected);
    } else {
      //removes the zone if it is already in the common service array
      this.commonService.zones.splice(this.commonService.zones.indexOf(zoneSelected),1);
    }
  }

  checkActivities(activitySelected: EconomicActivityModel, event: any) {
    if (event.checked) {
      //Adds the selected activity to the array zones in the common service to use it there as parameter
      this.commonService.activities.push(activitySelected);
    } else {
      //removes the selected if it is already in the common service array
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
