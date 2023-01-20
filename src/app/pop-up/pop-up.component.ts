import { Component, Inject, OnInit } from '@angular/core'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'
import { Router } from '@angular/router'
import { EditcarComponent } from '../editcar/editcar.component'

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<EditcarComponent>,
  ) {}

  shutting(): void {
    this.dialogRef.close(true)
    this.router.navigateByUrl('/carlist')
  }
}
