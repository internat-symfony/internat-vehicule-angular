import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component } from '@angular/core'
import { Cars } from '../models/cars'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CreatecarService } from './createcar.service'
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm'
@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css'],
})
export class CreatecarComponent {
  form!: FormGroup
  cars: Cars[] = []

  constructor(
    public createcarservice: CreatecarService,
    private router: Router,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    })
  }

  get f() {
    return this.form.controls
  }

  submit() {
    console.log(this.form.value)
    this.createcarservice.createCar(this.form.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/carlist')
    })
  }
}
