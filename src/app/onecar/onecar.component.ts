import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Cars } from '../models/cars'
import { ActivatedRoute, Router } from '@angular/router'
import { OnecarService } from './onecar.service'

@Component({
  selector: 'app-onecar',
  templateUrl: './onecar.component.html',
  styleUrls: ['./onecar.component.css'],
})
export class OnecarComponent {
  id!: number
  onecar!: Cars
  constructor(
    public onecarservice: OnecarService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.onecarservice.getCarById(this.id).subscribe((data: Cars) => {
      this.onecar = data
    })
  }
}
