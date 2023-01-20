import {
  NgModule,
  Component,
  enableProdMode,
  OnInit,
  Output,
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { DxListModule } from 'devextreme-angular'
import { AppModule } from '../app.module'
import { CarProductService } from './carslist.service'
import { Cars } from '../models/cars'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { EditcarService } from '../editcar/editcar.service'
import { MatTableModule } from '@angular/material/table'
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm'
import { NgxConfirmBoxService } from 'ngx-confirm-box'
import { MatDialog } from '@angular/material/dialog'
import { NgConfirmService } from 'ng-confirm-box'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'demo-app',
  providers: [CarProductService],
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css'],
})
export class CarslistComponent {
  @Output()
  id!: number

  cars!: Observable<Cars[]>
  constructor(
    public carsservice: CarProductService,
    public careditservoce: EditcarService,
    private confirmService: NgConfirmService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.seethemall()
  }

  seethemall() {
    this.cars = this.carsservice.getAllCars()
  }

  deleteCar(id: number) {
    this.confirmService.showConfirm(
      'Voulez-vous vraiment supprimer cette vehicule ?',
      () => {
        this.carsservice.deleteOneCar(id).subscribe((res) => {
          this.seethemall()
          console.log('car deleted successfully!')
        })
      },
      () => {},
    )
    this.carsservice.deleteOneCar(id).subscribe((res) => {
      this.seethemall()
      console.log(res)
    })
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        message: 'Voulez-vous vraiment supprimer cette véhicule ?',
      },
      height: '300px',
      width: '500px',
    })

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.carsservice.deleteOneCar(id).subscribe((res) => {
          this.seethemall()
          console.log('Club deleted successfully!')
        })
      }
    })
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      }
    })
  }

  gotoedit(id: number) {
    this.router.navigateByUrl(`/editcar${id}`)
  }
}
