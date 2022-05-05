import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { ZoneModel } from "../models/common/zone.model";
import { EconomicActivityModel } from "../models/common/economic-activity.model";
import {MunicipalMarketModel} from "../models/municipal-market.model";
import {Router} from "@angular/router";
import {MarketFairModel} from "../models/market-fair.model";

@Injectable({
  providedIn: 'root'
})

export class MarketFairsService {

  //Options checked
  private _bcnZonesSelected: number[] = [];

  //Municipal Markets
  private _marketFairs: MarketFairModel[]=[];

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get marketFairs():MarketFairModel[]{
    return [...this._marketFairs];
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
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_MARKET_FAIRS}`, { params: params },
    )
  }

  addMarketFairs(element: MarketFairModel) {
    this._marketFairs.push(element);
  }

}
