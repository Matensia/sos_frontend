import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DialogSignComponent } from './dialog-sign/dialog-sign.component';
import { DialogInactiveComponent } from './dialog-inactive/dialog-inactive.component';



@NgModule({
  declarations: [
    LoginComponent,
    DialogSignComponent,
    DialogInactiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
