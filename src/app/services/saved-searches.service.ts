import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { SavedSearchesModel } from "../models/common/saved-searches.model";

@Injectable({
    providedIn: 'root'
  })
  
  export class SaveSearchesService {

    constructor(private http: HttpClient){
        
    }

    getSavedSearches(){

        this.http.get<SavedSearchesModel>(`${environment.BACKEND_BASE_URL}${environment.BACKEND_SAVED_SEARCHES_URL}`
        )
      
    }
  }