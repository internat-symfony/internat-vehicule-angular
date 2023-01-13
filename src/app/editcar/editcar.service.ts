import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cars } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class EditcarService {
  private car:Cars={
    id: 0,
    name:'',
    image:'',
    price: '',
    }
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  updateCar(id:number,car:Cars): Observable<Cars> {
    return this.http.put<Cars>(`http://127.0.0.1:8000/cars/carupdate/${id}`,car ,this.httpOptions)
  }
}
