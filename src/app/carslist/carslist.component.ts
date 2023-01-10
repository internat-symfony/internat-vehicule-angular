import { NgModule, Component, enableProdMode ,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListModule } from 'devextreme-angular';
import { AppModule } from '../app.module';
import {  CarProductService } from './carslist.service';
import {Cars} from '../models/cars'
import { Observable } from 'rxjs';




@Component({
  selector: 'demo-app',
  providers: [CarProductService],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css'],
})
export class CarslistComponent {
 cars!: Observable<Cars[]>;
id!:Observable<Cars[]>;
  constructor(public carsservice: CarProductService) {

    // this.products = service.getProducts();
  // }
  // products: Cars[] = [];ngOnInit(): void {
  //   this.carsservice.getProducts().subscribe(response => {
  //       this.products = response.image;
  
  //     });
  // }
}
ngOnInit(): void {
  this.cars = this.carsservice.getAllCars();
}
deleteCar(id:number){
  console.log(id);
   this.carsservice.deleteOneCar(id).subscribe(res=>{
    // this.cars;
     console.log(res);
   });
}
}