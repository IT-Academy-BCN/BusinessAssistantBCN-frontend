import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonService} from "../../../services/common.service";
import {ZoneModel} from "../../../models/common/zone.model";
import {EconomicActivityModel} from "../../../models/common/economic-activity.model";


@Component({
  selector: 'app-my-environment-search',
  templateUrl: './my-environment-search.component.html',
  styleUrls: ['./my-environment-search.component.css']
})
export class MyEnvironmentSearchComponent implements OnInit {

  largeStablishments:boolean = false;
  municipalMarkets:boolean = false;
  commercialGalleries:boolean = false;
  marketFairs:boolean = false;
  bigMalls:boolean = false;
  
  zones:ZoneModel[] = []; //zones will store all the available zones before any selection
  activities:EconomicActivityModel[] =[]; //activities will store all the available economic activities before any selection

  constructor(private commonService:CommonService,
              private activatedRoute:ActivatedRoute
              ) {
      this.activatedRoute.params.subscribe(params => {
        if(params['id']==='large-stablishments') this.largeStablishments=true;
        if(params['id']==='commercial-galleries') this.commercialGalleries=true;
        if(params['id']==='big-malls') this.bigMalls=true;
        if(params['id']==='municipal-markets') this.municipalMarkets=true;
        if(params['id']==='market-fairs') this.marketFairs=true;
      })          
   }

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

  search(businessModel:string){
    this.commonService.getEnvironments(businessModel).subscribe((response:any)=>{
      this.commonService.results=response.results;
    });
  }

}
