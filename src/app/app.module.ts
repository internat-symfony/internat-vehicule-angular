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

@NgModule({
  declarations: [
    AppComponent,
    CarslistComponent,
    OnecarComponent,
    CreatecarComponent,
    EditcarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxListModule,     
    FormsModule,
    ReactiveFormsModule 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
