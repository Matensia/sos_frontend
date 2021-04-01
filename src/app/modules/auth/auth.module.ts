import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DialogSignComponent } from './dialog-sign/dialog-sign.component';



@NgModule({
  declarations: [
    LoginComponent,
    DialogSignComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
