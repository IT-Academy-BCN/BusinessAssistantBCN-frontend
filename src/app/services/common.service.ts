import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ZoneModel} from "../models/common/zone.model";
import {EconomicActivityModel} from "../models/common/economic-activity.model";

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  zones:ZoneModel[]=[];
  activities:EconomicActivityModel[]=[]
  API_ENDPOINT:string = '../../assets/dummy/full/'

  constructor(private router:Router,
              private http: HttpClient) {
  }

  getZones(): Observable<any>{
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_ZONES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  getEconomicActivities(): Observable<any> {
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  getEnvironments<T>(path:string):Observable<T>{
    return this.http.get<T>(this.API_ENDPOINT + path);
  }

  largeStablishmentsClicked:boolean=false;
  municipalMarketsClicked:boolean=false;
  commercialGalleriesClicked:boolean=false;
  marketFairsClicked:boolean=false;
  bigMalssClicked: boolean = false;
}
