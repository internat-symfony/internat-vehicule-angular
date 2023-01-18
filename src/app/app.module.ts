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
import { ConfirmBoxConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CommonModule } from '@angular/common';
import {MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    OnecarComponent,
    CreatecarComponent,
    EditcarComponent,
    WelcomeComponent,
    PopUpComponent,
    ConfirmDialogComponent
    ],
  imports: [
    MatDialogModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    DxListModule,     
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    NgbModule,
    NgxAwesomePopupModule.forRoot(), 
    ConfirmBoxConfigModule.forRoot(),
    NgxBootstrapConfirmModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    ],
    exports: [  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
