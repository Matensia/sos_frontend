import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ILogin } from 'src/app/core/api/models/i-login';
import { ISign } from 'src/app/core/api/models/i-sign';
import { LoginResourceService } from 'src/app/core/api/services/login-resource.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogSignComponent } from '../dialog-sign/dialog-sign.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formSign: FormGroup;
  
  private _login: ILogin;
  private _sign: ISign;

  public get loginModel(): ILogin {
    return this._login;
  }
  public set loginModel(value: ILogin) {
    this._login = value;
  }

  public get signModel(): ISign {
    return this._sign;
  }
  public set signModel(value: ISign) {
    this._sign = value;
  }

  constructor(private formBuilder : FormBuilder,
     private _service: LoginResourceService, 
     private router: Router, 
     public dialog: MatDialog,) { 
    this.buildForm();
  }
  ngOnInit() {
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      'email': new FormControl('',[Validators.email]),
      'pass': new FormControl('',[Validators.required])
    });
    this.formSign = this.formBuilder.group({
      'emailSg': new FormControl('',[Validators.email]),
      'passSg': new FormControl('',[Validators.required]),
      'rePassSg': new FormControl('',[Validators.required]),
      'nombreSg': new FormControl('',[Validators.required]),
      'apellidoSg': new FormControl('',[Validators.required]),
      'paisSg': new FormControl('',[Validators.required]),
      'direccionSg': new FormControl('',[Validators.required]),
      'dniSg': new FormControl('',[Validators.required]),
      'cuilSg': new FormControl('',[Validators.required]),
      'telefonoSg': new FormControl('',[Validators.required]),
    });
  }

  public login(event: Event) {
    event.preventDefault();

    let reqLogin: ILogin = <ILogin> {
      email: this.formLogin.get('email').value, 
      pass: this.formLogin.get('pass').value,
    };

    this._service.login(reqLogin).then((login: ILogin) => {
      sessionStorage.setItem('email',reqLogin.email)
      sessionStorage.setItem('dni', login.dni.toString())
      this.router.navigate(['/portal/news']);
    });
  }

  public sign(event: Event) {
    event.preventDefault();
    let reqSign: ISign = <ISign> {
      email: this.formSign.get('emailSg').value, 
      pass: this.formSign.get('passSg').value,
      repass: this.formSign.get('rePassSg').value,
      nombre: this.formSign.get('nombreSg').value,
      apellido: this.formSign.get('apellidoSg').value,
      pais: this.formSign.get('paisSg').value,
      direccion: this.formSign.get('direccionSg').value,
      dni: this.formSign.get('dniSg').value,
      cuil: this.formSign.get('cuilSg').value,
      telefono: this.formSign.get('telefonoSg').value,
    };

    this._service.sign(reqSign).then((sign: ISign) => {
      this.router.navigate(['/login']);
      console.log("VALIDAR QUE PASA EN CASO DE ERROR")
      console.log(sign)
    });
  
    sessionStorage.setItem('email',reqSign.email)
    this.dialog.open(DialogSignComponent).disableClose = true;
    console.log(reqSign)
  }
}