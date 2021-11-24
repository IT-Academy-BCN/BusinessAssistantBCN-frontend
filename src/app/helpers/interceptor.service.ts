import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const headers = new HttpHeaders({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDM0YjE4MC1mOTI0LTExZWItYTdlMS0wNmMwZjczZTU1ODQiLCJpYXQiOjE2MzcwNTcxMTksImV4cCI6MTYzNzA2MDcxOX0.gKOc8neofhh4uGy5_NQs5qPzYOaNkYJrky7BbkAipi0'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone );
    
  }
}
