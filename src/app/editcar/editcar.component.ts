import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from '../models/cars';
import { EditcarService } from './editcar.service';
import { OnecarService } from '../onecar/onecar.service';
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
    private router: Router
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
         console.log('Post updated successfully!');
         this.router.navigateByUrl('');
    })
  }
}
