import { Injectable, Output } from '@angular/core'
import { Cars } from '../models/cars'
// import {  } from 'rxjs';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class CarProductService {
  @Output()
  carId!: number
  id!: number

  constructor(public http: HttpClient, public router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  getbaseURL: string = 'http://127.0.0.1:8000/cars/getcarlist'
  // deletebaseURL: string = `http://127.0.0.1:8000/cars/deletecar/${id}`

  getAllCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.getbaseURL)
  }
  deleteOneCar(id: number): Observable<Cars[]> {
    return this.http.delete<any>(`http://127.0.0.1:8000/cars/deletecar/${id}`)
  }

  findOneCar(id: number): Observable<Cars[]> {
    return this.http.get<Cars[]>(
      `http://127.0.0.1:8000/cars/getcardetail/${id}`,
    )
  }
  setIdCar(id: number) {
    this.carId = id
    console.log(this.carId, 'thiscar ')
  }
  getIdCar() {
    console.log(this.carId, 'this is the car getid ')
    return 24
  }
}
