import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  private zone_url    : string = environment.BACKEND_ZONES_URL;
  
  private activity_url: string = environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL;

  constructor(private router:Router,
              private http: HttpClient) {
  }


 
  getZonesBigStablishmentsToSearch(){
    
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }/${this.zone_url}`,

      {
        headers: {
          'Content-Type': 'application/json'
        }

      });

  }

  getEconomicActivitiesToSearch() {
    return this.http.get(

      `${ environment.BACKEND_BASE_URL }/${ this.activity_url }`,

        {
        headers: {
          'Content-Type': 'application/json'
        }

      });
  }

}
