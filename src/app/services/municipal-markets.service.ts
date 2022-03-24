import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { map, Observable } from "rxjs";
import { ZoneModel } from "../models/common/zone.model";
import { MunicipalMarketModel } from "../models/municipal-market.model";

@Injectable({
  providedIn: 'root'
})
export class MunicipalMarketsService {

  //Options checked
  private _bcnZonesSelected: number[] = [];

  //Municipal Markets
  private _municipalMarkets: MunicipalMarketModel[]=[];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get municipalMarkets():MunicipalMarketModel[]{
    return [...this._municipalMarkets];
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
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`, { params: params },
    )
  }

  addMunicipalMarkets(element: MunicipalMarketModel) {
    this._municipalMarkets.push(element);
  }
}
