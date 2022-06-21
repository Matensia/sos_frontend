import { Component, OnInit } from "@angular/core";
import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { IService } from "src/app/core/api/models/i-service";
import { IAsistenciaRequest } from "src/app/core/api/models/i-asistencia-req";
import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  private _servicios: IService[];
  selectedValue: string;
  textArea: string;
  asistencia: IAsistencia;

  private _latitud: Number = -31.3389031;
  private _longitud: Number = -64.2575066;

  position = {
    lat: this.latitud,
    lng: this.longitud,
  };

  public get servicios(): IService[] {
    return this._servicios;
  }
  public set servicios(value: IService[]) {
    this._servicios = value;
  }

  public get latitud(): Number {
    return this._latitud;
  }
  public set latitud(value: Number) {
    this._latitud = value;
  }

  public get longitud(): Number {
    return this._longitud;
  }
  public set longitud(value: Number) {
    this._longitud = value;
  }

  constructor(
    private _service: PortalResourceService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._service.services().then((servicios: IService[]) => {
      this._servicios = servicios;
    });
    this.getLocation();
  }

  public async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Navegador no soporta ubicacion");
    }
    navigator.geolocation.getCurrentPosition(success, error);

    function success(geolocationPosition) {
      console.log(geolocationPosition.coords.longitude);
      console.log(geolocationPosition.coords.latitude);
    }
    function error() {}
  }

  public solicitar() {
    if (this.selectedValue == undefined) {
      this._snackBar.open("Debe ingresar un servicio", "", {
        duration: 3000,
        panelClass: ["alert-red"],
      });
      return;
    }

    let reqAsistencia: IAsistenciaRequest = <IAsistenciaRequest>{
      dni: parseInt(sessionStorage.getItem("dni")),
      idServicio: this.selectedValue,
      dato: this.textArea,
    };

    this._service
      .asistencia(reqAsistencia)
      .then((asistenciaResp: IAsistencia) => {
        this.asistencia = asistenciaResp;

        this._snackBar.open("Asistencia solicitada", "", {
          duration: 3000,
          panelClass: ["alert-green"],
        });

        this.ngOnInit();
      });
  }
}
