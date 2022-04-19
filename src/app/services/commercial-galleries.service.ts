import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from "@angular/common/http";
import {ZoneModel} from "../models/common/zone.model";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {CommercialGalleryModel} from "../models/commercial-gallery.model";

@Injectable({
  providedIn: 'root'
})
export class CommercialGalleriesService {
  //Options checked
  private _bcnZonesSelected: number[] = [];


  private _commercialGalleries: CommercialGalleryModel[]=[];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get municipalMarkets():CommercialGalleryModel[]{
    return [...this._commercialGalleries];
  }

  constructor(private router: Router,
              private http: HttpClient) {
  }

  addZonesSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.push(zoneSelected.idZone)
  }

  deleteZoneSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.map((zone, index) => {
      if (zone === zoneSelected.idZone) {
        this._bcnZonesSelected.splice(index, 1);
      }
    });
  }

  initializeSelected() {
    this._bcnZonesSelected = [];
  }

  // pass data to backend
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.bcnZonesSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_COMMERCIAL_GALLERIES}`, { params: params },
    )
  }

  addMunicipalMarkets(element: CommercialGalleryModel) {
    this._commercialGalleries.push(element);
  }
}
