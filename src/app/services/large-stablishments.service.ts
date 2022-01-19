import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  constructor(private router:Router,
              private http: HttpClient) {
  }

<<<<<<< Updated upstream
=======
  getZonesBigStablishmentsToSearch(){
    return this.http.get(
      `dummy\zones_dummy.json`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  getEconomicActivitiesToSearch() {
    return this.http.get(
      `${ environment.BACKEND_BASE_URL }${ environment.BACKEND_LARGE_STABLISHMENTS_ACTIVITIES_URL }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
>>>>>>> Stashed changes
}
