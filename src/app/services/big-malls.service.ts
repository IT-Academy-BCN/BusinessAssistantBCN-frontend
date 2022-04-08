import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EconomicActivityModel } from '../models/common/economic-activity.model';
import { ZoneModel } from '../models/common/zone.model';

@Injectable({
  providedIn: 'root'
})
export class BigMallsService {

  constructor( private http: HttpClient ) { }

  private _zonesSelected: ZoneModel[] = [];
  private _activitiesSelected: EconomicActivityModel[] = [];

  get zoneSelected() {
    return [...this._zonesSelected]
  }

  get activitiesSelected(){
    return [...this._activitiesSelected]
  }

  setZonesSelected( zonesArr: ZoneModel[] ){
    this._zonesSelected = zonesArr;
  }

  setActivitiesSelected( activitiesArr: EconomicActivityModel[] ){
    this._activitiesSelected = activitiesArr
  }

  getSelectedData() {
    let params = new HttpParams();
    const zonesId = this._zonesSelected.map( zone => zone.idZone );
    const activitiesId = this._activitiesSelected.map( activity => activity.idActivity )

    params = params.append( 'zones', JSON.stringify(zonesId) )
    params = params.append( 'activities', JSON.stringify(activitiesId) );

    console.log(params)
    // Fake-filtered to check that it works. Will have to be replaced for real backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_BIG_MALLS_FAKE_FILTERED_RESULTS}`, { params: params },
    )
  }



}
