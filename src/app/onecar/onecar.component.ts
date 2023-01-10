import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../models/cars';

@Component({
  selector: 'app-onecar',
  templateUrl: './onecar.component.html',
  styleUrls: ['./onecar.component.css']
})
export class OnecarComponent {
  onecar!: Cars;
  onecar$!: Observable<Cars[]>;
  

  ngOnInit() {
    
    // const onecarId = 
    // this.onecar$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
}
}
