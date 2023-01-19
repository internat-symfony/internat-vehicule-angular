import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarslistComponent } from '../carslist/carslist.component';
import { CarProductService } from '../carslist/carslist.service';
import { Cars } from '../models/cars';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent  {
  onecar!: Cars;  
  id!: number;
  oui! :boolean;
annuler! :boolean;
  constructor( private router: Router,
  public dialogRef: MatDialogRef <CarslistComponent>, private carlistservice: CarProductService ,private carlist: CarslistComponent){
 }
// if(deleting){
//   this.oui=true
// }

 deleting(id : number){
  this.dialogRef.close(true);
  this.carlist.deleteCar(id );
 }    
 closing(): void{
  this.dialogRef.close(true);
 }
}
