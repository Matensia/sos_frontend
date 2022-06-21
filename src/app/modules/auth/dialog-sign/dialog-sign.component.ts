import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { IDialogSign } from "src/app/core/api/models/i-sign-dialog";
import { LoginResourceService } from "src/app/core/api/services/login-resource.service";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-dialog-sign",
  templateUrl: "./dialog-sign.component.html",
  styleUrls: ["./dialog-sign.component.css"],
})
export class DialogSignComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {}

  formVerifySign: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _service: LoginResourceService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogSignComponent>,
    private _snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.formVerifySign = this.formBuilder.group({
      codigoSg: new FormControl("", [Validators.required]),
    });
  }

  public verificar(event: Event) {
    event.preventDefault();
    let email = sessionStorage.getItem("email");

    let reqVerify: IDialogSign = <IDialogSign>{
      email: email,
      codigo: this.formVerifySign.get("codigoSg").value,
    };

    this._service.verify(reqVerify).then((verify: IDialogSign) => {
      console.log(verify);
      sessionStorage.clear;
      this._snackBar.open("Código validado correctamente", "", {
        duration: 3000,
        panelClass: ["alert-green"],
      });
      location.reload();
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
