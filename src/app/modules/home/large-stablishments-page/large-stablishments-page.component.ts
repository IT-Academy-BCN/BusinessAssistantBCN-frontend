import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service';
import { CommonService} from "../../../services/common.service";
import {ZoneModel} from "../../../models/common/zone.model";
import { ActivityModel } from '../../../models/common/activity.model';


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
  bcnActivities: ActivityModel[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commonservice: CommonService, 
              private largeStablishmentsService: LargeStablishmentsService) { }

  ngOnInit(): void {
    this.loadMasterData();
  }

  ngOnDestroy() {
    if( this.zones$ != undefined ) this.zones$.unsubscribe();
    if( this.activities$ != undefined ) this.activities$.unsubscribe();
  }

  loadMasterData(){
    this.zones$ = this.commonservice.getZones().subscribe( resp => {
      resp.forEach ( (element:ZoneModel) => {
        const bcnZone:ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
        console.log(bcnZone);
      });
    });

    this.activities$ = this.commonservice.getEconomicActivities().subscribe( (resp) => {
      resp.results.forEach ( (element:any) => {
        const bcnActivities:ActivityModel = new ActivityModel(element);
        this.bcnActivities.push(bcnActivities);
        console.log(bcnActivities);
      });
    });
    
    

  }

}
