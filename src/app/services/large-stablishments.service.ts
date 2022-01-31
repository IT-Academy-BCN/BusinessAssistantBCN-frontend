import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  private zone_url: string = environment.BACKEND_ZONES_URL;

  constructor(private router:Router,
              private http: HttpClient) {
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  getZonesBigStablishmentsToSearch(){
    return this.http.get(
      `dummy\zones_dummy.json`,
=======
  getZonesBigStablishmentsToSearch(){
    
    return this.http.get(
      `${this.zone_url}`,
>>>>>>> Stashed changes
      {
        headers: {
          'Content-Type': 'application/json'
        }
<<<<<<< Updated upstream
      });
=======
      })
          
>>>>>>> Stashed changes
  }

  getEconomicActivitiesToSearch() {
    return this.http.get(
<<<<<<< Updated upstream
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL }`,
=======
      `economic-activities-census.json`,
>>>>>>> Stashed changes
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
