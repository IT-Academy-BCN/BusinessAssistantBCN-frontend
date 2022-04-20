
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {
  stablishmentActive$ = new EventEmitter<string>();

  // private bcnZonesSelected: number[] = [];
  // private activitiesSelected: number[] = [];

  constructor(private router: Router,
    private http: HttpClient,
  ){}


  // Pasar data de checkbox marcados a backend
  sendSelectedData(bcnZonesSelected: number[], activitiesSelected: number[]) {
    let params = new HttpParams();

    params = params.append('zones', JSON.stringify(bcnZonesSelected))

    params = params.append('activities', JSON.stringify(activitiesSelected));

    console.log(params)
    // Fake-filtered to check that it works. Will have to be substituted for actual backend response.
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`, { params: params },
    )
  }

  //recibir data filtrada
    getLargeStablishmentsData(){
    return this.http.get(`${environment.BACKEND_BASE_URL}${environment.BACKEND_LARGE_ESTABLISHMENTS_FAKE_FILTERED_RESULTS}`);
    }


}



