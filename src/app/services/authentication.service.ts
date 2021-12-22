import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from 'src/entities/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth_api: any = environment.BACKEND_BASE_URL;
  endpoint: string = '/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }


  public login(body: LoginRequest): Observable<any> {
    console.log(body);
    return this.http.post(this.auth_api + this.endpoint, { body },
      this.httpOptions);
  }
}

