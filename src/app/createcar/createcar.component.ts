import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cars } from '../models/cars';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CreatecarService } from './createcar.service';
@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent {
 
  form!: FormGroup;
  cars: Cars[]=[];
  // cartocreate: Cars;

  constructor(
    public createcarservice: CreatecarService,
    private router: Router
  ) { }
     

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),     
    });
  }
     

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    // this.cartocreate=this.form.value;
    this.createcarservice.createCar(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('');
    })
  }  
}





