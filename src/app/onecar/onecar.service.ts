import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Cars } from '../models/cars'

@Injectable({
  providedIn: 'root',
})
export class OnecarService {
  constructor(public http: HttpClient) {}
  id!: Observable<Cars[]>

  getCarById(id: number): Observable<Cars> {
    return this.http.get<Cars>(`http://127.0.0.1:8000/cars/getcardetail/${id}`)
  }
}
