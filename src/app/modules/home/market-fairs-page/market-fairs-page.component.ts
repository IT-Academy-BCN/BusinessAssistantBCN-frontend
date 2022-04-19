import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MarketFairsService } from '../../../services/market-fairs.service';
import { CommonService } from "../../../services/common.service";
import { ZoneModel } from "../../../models/common/zone.model";
import { EconomicActivityModel } from 'src/app/models/common/economic-activity.model';
import {FormArray , FormBuilder , FormGroup} from "@angular/forms";
import {ActivatedRoute , Router} from "@angular/router";
import {MunicipalMarketsService} from "../../../services/municipal-markets.service";


@Component({
  selector: 'app-market-fairs-page',
  templateUrl: './market-fairs-page.component.html',
  styleUrls: ['./market-fairs-page.component.css']
})
export class MarketFairsPageComponent implements OnInit, OnDestroy {
  //Subscriptions
  zones$!: Subscription;
  marketFairs$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];

  get bcnZonesSelected() {
    return this.marketFairsService.bcnZonesSelected;
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
      resp.results.forEach((element: any) => {
        const bcnZone: ZoneModel = new ZoneModel(element);
        this.bcnZones.push(bcnZone);
      });
    });
  }

  marketFairsZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.marketFairsService.addZonesSelected(zoneSelected);
    } else {
      this.marketFairsService.deleteZoneSelected(zoneSelected);
    }
    console.log(this.bcnZonesSelected);
  }

  marketFairsSearch() {
    this.commonService.municipalMarketsClicked=true;
    this.marketFairsService.sendSelectedData()
        .subscribe((resp: any) => {
          console.log(resp)
        });

  }
}

