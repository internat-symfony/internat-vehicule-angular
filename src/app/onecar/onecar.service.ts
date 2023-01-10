import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class OnecarService {

  constructor(public   http: HttpClient) { }

  getCarById(faceSnapId: number): Observable<Cars> {
    return this.http.get<Cars>(`http://localhost:3000/facesnaps/${faceSnapId}`);
}

}
