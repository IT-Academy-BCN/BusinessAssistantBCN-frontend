import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import { map, Observable } from "rxjs";
import { ZoneModel } from "../models/common/zone.model";
import { LargeStablishmentModel } from '../models/large-stablishment.model';
import { EconomicActivityModel } from "../models/common/economic-activity.model";

@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  //Options checked
  private _bcnZonesSelected: ZoneModel[] = [];

  get bcnZonesSelected(): ZoneModel[] {
    return [...this._bcnZonesSelected];
  }  

  constructor(private router:Router,
              private http: HttpClient) {
  }

  getZoneBySearch(term: string): Observable<any> {
    return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_ZONES_URL}/${term}`);
  }

  getActivityBySearch(term: string): Observable<any> {
    return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL}/${term}`);

  }

  getLgSt(): Observable<any> {
    return this.http.get(`${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(map((response: any) =>
    <LargeStablishmentModel>response
    ))
  }

 

  addZonesSelected(zoneSelected: ZoneModel) {
    this._bcnZonesSelected.push(zoneSelected)
  }

  deleteZoneSelected(zoneSelected: ZoneModel){
    this._bcnZonesSelected.map((zone, index)=> {
      if(zone === zoneSelected){
        this._bcnZonesSelected.splice(index,1);
      }
    });
  }

  initializeZonesSelected() {
    this._bcnZonesSelected = [];
  }




}
