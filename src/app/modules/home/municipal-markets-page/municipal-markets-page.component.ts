import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MunicipalMarketsService } from './../../../services/municipal-markets.service';
import { CommonService } from "../../../services/common.service";
import { ZoneModel } from "../../../models/common/zone.model";
import { MunicipalMarketModel } from 'src/app/models/municipal-market.model';
import { BreadcrumbService } from '../../../services/breadcrumb.service';


@Component({
  selector: 'app-municipal-markets-page',
  templateUrl: './municipal-markets-page.component.html',
  styleUrls: ['./municipal-markets-page.component.css']
})
export class MunicipalMarketsPageComponent implements OnInit {

  //Subscriptions
  zones$!: Subscription;
  municipalMarkets$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];

  get bcnZonesSelected() {
    return this.municipalMarketsService.bcnZonesSelected;
  }

  get breadcrumbs() {
    return this.breadcrumbService.breadcrumbs;
  }
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private municipalMarketsService: MunicipalMarketsService,
              private commonService: CommonService,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.municipalMarketsService.initializeSelected();
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

  municipalMarketsZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.municipalMarketsService.addZonesSelected(zoneSelected);
    } else {
      this.municipalMarketsService.deleteZoneSelected(zoneSelected);
    }
    console.log(this.bcnZonesSelected);
  }

  municipalMarketsSearch() {
    this.commonService.municipalMarketsClicked=true;
    this.municipalMarketsService.sendSelectedData()
      .subscribe((resp: any) => {
        console.log(resp)
      });

  }

}
