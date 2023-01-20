import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  message: string = 'Are you sure want to delete?'
  confirmButtonText = 'Confirmer'
  cancelButtonText = ' Annuler'
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>,
  ) {
    if (data) {
      this.message = data.message || this.message
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true)
  }
}
