import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarslistComponent } from './carslist/carslist.component';
import { AppRoutingModule } from './app-routing.module';
import { OnecarComponent } from './onecar/onecar.component';
import { DxListModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { CreatecarComponent } from './createcar/createcar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditcarComponent } from './editcar/editcar.component';
import {MatTableModule} from '@angular/material/table'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    CarslistComponent,
    OnecarComponent,
    CreatecarComponent,
    EditcarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    DxListModule,     
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
