import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import { Observable } from "rxjs";
import { ZoneModel } from "../models/common/zone.model";


@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  private apiUrl: string = environment.BACKEND_BASE_URL;

  constructor(private router:Router,
              private http: HttpClient) {
  }

  getZoneBySearch( term: string ): Observable<any> {
    const url = `${ this.apiUrl}/opendata/large-stablishments/district/${ term }`;
    return this.http.get( url );

  }

  getActivityBySearch( term: string ): Observable<any> {
    const url = `${ this.apiUrl}/opendata/large-stablishments/activity/${ term }`;
    return this.http.get( url );

  }

}
