import { NgModule, Component, enableProdMode ,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListModule } from 'devextreme-angular';
import { AppModule } from '../app.module';
import {  CarProductService } from './carslist.service';
import {Cars} from '../models/cars'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EditcarService } from '../editcar/editcar.service';
import {MatTableModule} from '@angular/material/table'




@Component({
  selector: 'demo-app',
  providers: [CarProductService],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css'],
})
export class CarslistComponent {
 cars!: Observable<Cars[]>;
id!:Observable<Cars[]>;
  constructor(public carsservice: CarProductService,
   public careditservoce:EditcarService,
    private router: Router
    )
     {
}
ngOnInit(): void {
  this.seethemall()
}
seethemall(){
  this.cars = this.carsservice.getAllCars();
}
deleteCar(id:number){
  console.log(id);
   this.carsservice.deleteOneCar(id).subscribe(res=>{
    this.seethemall()
     console.log(res);
   });
}
gotoedit(id:number){
  this.router.navigateByUrl(`/editcar${id}`);
}
}