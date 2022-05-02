import { Component, OnInit } from '@angular/core';
import { PortalResourceService } from 'src/app/core/api/services/portal-resource.service';
import { IService } from 'src/app/core/api/models/i-service';
import { Observable, Subject } from 'rxjs';
import { IAsistenciaRequest } from 'src/app/core/api/models/i-asistencia-req';
import { IAsistencia } from 'src/app/core/api/models/i-asistencia';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
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
  }

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

  constructor(private _service: PortalResourceService) {
  }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert("Navegador no soporta ubicacion")
    }
    navigator.geolocation.getCurrentPosition(success, error)

    function success(geolocationPosition) {
      console.log(geolocationPosition.coords.longitude);
      console.log(geolocationPosition.coords.latitude);
    }
    function error() {
      alert("Error al obtener ubicacion")
    }

    this._service.services().then((servicios: IService[]) => {
      this._servicios = servicios;
    });
  }

  public solicitar(event: Event) {
    if (this.selectedValue == undefined) {
      alert("Debe ingresar un servicio")
      return
    }

    let reqAsistencia: IAsistenciaRequest = <IAsistenciaRequest> {
      dni: parseInt(sessionStorage.getItem('dni')),
      idServicio: this.selectedValue,
      dato: this.textArea
    };

    this._service.asistencia(reqAsistencia).then((asistenciaResp: IAsistencia) => {
      this.asistencia = asistenciaResp
    });

    
  }
}