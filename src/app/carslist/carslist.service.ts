import { Injectable } from '@angular/core';
import { Cars } from '../models/cars';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CarProductService {

  
  constructor(private http: HttpClient) { }

  getbaseURL: string = "http://127.0.0.1:8080/cars/getcarlist";
// deletebaseURL: string = `http://127.0.0.1:8000/cars/deletecar/${id}`



//  products: Cars[] = [
//   {image:'https://www-europe.nissan-cdn.net/content/dam/Nissan/fr/Homepage/Nissan_HP_Qashqai_e-POWER_954x514.jpg.ximg.l_12_m.smart.jpg',
// name:'NISSAN',
// price:'60 000 EURO'
// },
// {image:'https://catalogue.automobile.tn/big/2022/11/46853.jpg?t=1668090001',
// name:'Peugeot',
// price:'10 000 EURO'
// },{image:'https://cdn.motor1.com/images/mgl/koAbyB/s1/4x3/nuova-bmw-serie-5-2023-il-render-di-motor1.com.webp',
// name:'BMW',
// price:'100 000 EURO'
// },{image:'https://news.automobile.tn/2022/04/lancement-de-laudi-a3-berline-1936_min.jpg?t=1649840187',
// name:'Audi',
// price:'80 000 EURO'
// },{image:'https://catalogue.automobile.tn/big/2021/12/46684.jpg?t=1666169421',
// name:'TOYOTA',
// price:' 40 000 EURO'
// }
// ];
// getProducts() : Cars[] {
//   return this.products;
// }


// getProducts(): Observable<Cars> {
//   return this.http.get<Cars>(this.getbaseURL + '/thisisget' )
// }
getAllCars(): Observable<Cars[]> {
  return this.http.get<Cars[]>(this.getbaseURL);
}
 deleteOneCar(id:any): Observable <Cars[]>{
  return this.http.delete<any>(`http://127.0.0.1:8080/cars/deletecar/${id}`)
}

}

