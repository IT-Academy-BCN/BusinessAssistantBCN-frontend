import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ZoneModel } from 'src/app/models/common/zone.model';
import { CommonService } from 'src/app/services/common.service';
import {CommercialGalleriesService} from "../../../services/commercial-galleries.service";
import {ActivatedRoute , Router} from "@angular/router";


@Component({
  selector: 'commercial-galleries-page',
  templateUrl: './commercial-galleries-page.component.html',
  styleUrls: ['./commercial-galleries-page.component.css']
})
export class CommercialGalleriesPageComponent implements OnInit{

  //Subscriptions
  zones$!: Subscription;
  commercialGalleries$!: Subscription;

  //Other elements
  bcnZones: ZoneModel[] = [];

  get bcnZonesSelected() {
    return this.commercialGalleriesService.bcnZonesSelected;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commercialGalleriesService: CommercialGalleriesService,
              private commonService: CommonService) { }

  ngOnInit(): void {
    this.loadMasterData();
    this.commercialGalleriesService.initializeSelected();
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

  commercialGalleriesZonesSelected(zoneSelected: ZoneModel, event: any) {
    if (event.checked) {
      this.commercialGalleriesService.addZonesSelected(zoneSelected);
    } else {
      this.commercialGalleriesService.deleteZoneSelected(zoneSelected);
    }
    console.log(this.bcnZonesSelected);
  }

  commercialGalleriesSearch() {
    this.commonService.commercialGalleriesClicked=true;
    this.commercialGalleriesService.sendSelectedData()
        .subscribe((resp: any) => {
          console.log(resp)
        });

  }

}
