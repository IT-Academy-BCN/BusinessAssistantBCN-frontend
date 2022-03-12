import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
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
  private _bcnZonesSelected: number[] = [];
  private _activitiesSelected: number[] = [];

  // Large Stablishments
  private _largeStablishments: LargeStablishmentModel[] = []

  get bcnZonesSelected(): number[] {
    return [...this._bcnZonesSelected];
  }

  get activitiesSelected(): number[] {
    return [...this._activitiesSelected]
  }

  get largeStablishments(): LargeStablishmentModel[] {
    return [...this._largeStablishments];
  }

  constructor(private router: Router,
    private http: HttpClient) {
  }

  // getZoneBySearch(term: string): Observable<any> {
  //   return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL}/${term}`);
  // }

  // getActivityBySearch(term: string): Observable<any> {
  //   return this.http.get(`${environment.BACKEND_BASE_URL}/${environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITY_URL}/${term}`);

  // }

  // getLgSt(): Observable<any> {
  //   return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).pipe(map((response: any) =>
  //       <LargeStablishmentModel>response
  //     ))
  // }

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

  addActivitiesSelected(activitySelected: EconomicActivityModel) {
    this._activitiesSelected.push(activitySelected.idActivity);
    console.log(JSON.stringify([...this._activitiesSelected]))
  }

  deleteActivitySelected(activitySelected: EconomicActivityModel) {
    this._activitiesSelected.map((activity, index) => {
      activity === activitySelected.idActivity ? this._activitiesSelected.splice(index, 1) : null;
    })
  }

  initializeSelected() {
    this._bcnZonesSelected = [];
    this._activitiesSelected = [];
    this._largeStablishments = [];
  }

  // la funcion de pasar data a backend, para conseguir que funciona
  sendSelectedData() {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(this.bcnZonesSelected))
    params = params.append('activities', JSON.stringify(this.activitiesSelected));

    console.log(params)
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_STABLISHMENTS_SEARCH_URL}`, { params: params },
    )
  }

  addLargeStablishment(element: LargeStablishmentModel) {
    this._largeStablishments.push(element);
  }

}
