import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { IService } from "src/app/core/api/models/i-service";
import { IAsistenciaRequest } from "src/app/core/api/models/i-asistencia-req";
import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { MapsAPILoader } from "@agm/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PingResourceService } from "src/app/core/api/services/ping-resource.service";
import { DialogOffServiceComponent } from "../dialog-off-service/dialog-off-service.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  @Output() attendanceAdded: EventEmitter<any> = new EventEmitter<any>();

  selectedValue: string;
  textArea: string;
  asistencia: IAsistencia;
  latitude: number;
  longitude: number;
  currentInput;
  reader = new FileReader();
  fileByteArray = [];
  objImagen = new Image();

  lat = -31.3389031;
  lng = -64.2575066;

  private _servicios: IService[];

  public get servicios(): IService[] {
    return this._servicios;
  }
  public set servicios(value: IService[]) {
    this._servicios = value;
  }

  constructor(
    private _service: PortalResourceService,
    private _snackBar: MatSnackBar,
    private mapsAPILoader: MapsAPILoader,
    private _servicePing: PingResourceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._service.services().then((servicios: IService[]) => {
      this._servicios = servicios;
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });
  }

  private setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
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

        this.textArea = "";
        this.selectedValue = "";

        this.attendanceAdded.emit();
      });
  }

  public onFileSelected(event) {
    if (event.target.files.length > 0) {
      //ASI OBTENEMOS EL FILE
      //TODO VER COMO MANDARLO AL BACK
      this.reader.readAsBinaryString(event.target.files[0]);
    }
  }

  public validateStatusService(serviceId: string) {
    let respPing;
    switch (serviceId) {
      case "bomberos": {
        this._servicePing
          .bomberosPing()
          .then((ping: Text) => {
            respPing = ping;
          })
          .catch((err) => {
            this.dialog.open(DialogOffServiceComponent).disableClose = true;
            this.selectedValue = "";
          });
        break;
      }
      case "policia": {
        this._servicePing
          .policiaPing()
          .then((ping: Text) => {
            respPing = ping;
          })
          .catch((err) => {
            this.dialog.open(DialogOffServiceComponent).disableClose = true;
            this.selectedValue = "";
          });
        break;
      }
      case "urgencias": {
        this._servicePing
          .urgenciasPing()
          .then((ping: Text) => {
            respPing = ping;
          })
          .catch((err) => {
            this.dialog.open(DialogOffServiceComponent).disableClose = true;
            this.selectedValue = "";
          });
        break;
      }
      case "defensa_civil": {
        this._servicePing
          .defensaCivilPing()
          .then((ping: Text) => {
            respPing = ping;
          })
          .catch((err) => {
            this.dialog.open(DialogOffServiceComponent).disableClose = true;
            this.selectedValue = "";
          });
        break;
      }
      default: {
        alert("ERROR");
        break;
      }
    }
  }
}
