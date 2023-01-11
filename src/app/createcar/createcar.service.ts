import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cars } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CreatecarService {
  onecar!: Cars;  

  constructor(private http: HttpClient)
  {  
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  createCar(cartocreate:Cars): Observable<Cars> {
    return this.http.post<Cars>("http://127.0.0.1:8080/cars/createcar",cartocreate,this.httpOptions)
  } 
}
