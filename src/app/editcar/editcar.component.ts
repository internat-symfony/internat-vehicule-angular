import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from '../models/cars';
import { EditcarService } from './editcar.service';
import { OnecarService } from '../onecar/onecar.service';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent {
  id!: number;
  // car!: Cars;
  form!: FormGroup;
     
   car:Cars={
    id: 0,
    name:'',
    image:'',
    price: '',
    }

  constructor(
    public editcarservice: EditcarService,
    public onecarservice: OnecarService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService,
    private dialogRef: MatDialog
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.onecarservice.getCarById(this.id).subscribe((data: Cars)=>{
      this.form.patchValue(data)
      // this.car = data;
    }); 

    this.form = new FormGroup({
      // id: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }
         
    openDialog(){
      this.dialogRef.open(PopUpComponent);
      this.submit()
    }
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  
  submit(){
    console.log(this.form.value);
    this.editcarservice.updateCar(this.id,this.form.value).subscribe((res:any) => {
      // alert("véhicule modifié avec succes!")
         console.log('Post updated successfully!');
    })
  }
  // action() {
  //   let options ={
  //     title: 'ce sont vos dernieres modifications?',
  //     confirmLabel: 'oui',
  //     declineLabel: 'Annuler'
  //   }
  //   this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
  //     if (res) {
  //       this.submit()
  //       console.log('oui');
  //     } else {
  //       console.log('annuler');
  //     }
  //   });
  // }
}


