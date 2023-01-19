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
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { NgxConfirmBoxService } from 'ngx-confirm-box';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';




@Component({
  selector: 'demo-app',
  providers: [CarProductService],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css'],
})
export class CarslistComponent {
 cars!: Observable<Cars[]>;

 constructor(public carsservice: CarProductService,
   public careditservoce:EditcarService,
    private router: Router,
    private confirmBox: NgxConfirmBoxService,
    private dialogRef: MatDialog

    )
     {
}
bgColor           ='rgba(0,0,0,0.5)'; // overlay background color
confirmHeading    = '';
confirmContent    = "Are you sure want to delete tsddshis?";
confirmCanceltext = "Cancel";
confirmOkaytext   = "Okay";
ngOnInit(): void {
  this.seethemall()
}

yourMethod(){
  this.confirmBox.show();
}
        
openDialog(id:number){
  this.dialogRef.open(ConfirmationDialogComponent);
  this.deleteCar(id)
}
// confirmChange(showConfirm:boolean){
//   if(showConfirm){
// this.deleteCar(this.id)
//   }
// }
seethemall(){
  this.cars = this.carsservice.getAllCars();
}
  
deleteCar(id:number){
  console.log(id, 'hhhhhh');
   this.carsservice.deleteOneCar(id).subscribe(res=>{
    this.seethemall()
     console.log(res);
   });
}

gotoedit(id:number){
  this.router.navigateByUrl(`/editcar${id}`);
}
// action(id:number) {
//   let options ={
//     title: 'vous etes sur de supprimer la voiture?',
//     confirmLabel: 'Oui',
//     declineLabel: 'Annuler'
//   }
//   this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
//     if (res) {
//       this.deleteCar(id)
//       console.log('Oui');
//     } else {
//       console.log('Annuler');
//     }
//   });
// }
// popoverTitle = 'suppression?';
// popoverMessage = 'vous etes sur de supprimer la véhicule suivante?';
// cancelClicked = true;
// confirmClicked = this.deleteCar(this.id);
// confirmLabel= 'Oui';
// declineLabel= 'Annuler'
}