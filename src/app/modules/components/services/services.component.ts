import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MapsAPILoader } from "@agm/core";
import { MatDialog } from "@angular/material";

import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { IService } from "src/app/core/api/models/i-service";
import { IAsistenciaRequest } from "src/app/core/api/models/i-asistencia-req";
import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { PingResourceService } from "src/app/core/api/services/ping-resource.service";
import { DialogOffServiceComponent } from "../dialog-off-service/dialog-off-service.component";
import { IChat } from "src/app/core/api/models/i-chat";
import { IChatReq } from "src/app/core/api/models/i-chat-req";
import { ILogin } from "src/app/core/api/models/i-login";

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
  fileByteArray: string[] = [];
  objImagen = new Image();
  attendances: IAsistencia[];

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
    private _servicePing: PingResourceService,
    private mapsAPILoader: MapsAPILoader,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._service.services().then((servicios: IService[]) => {
      this._servicios = servicios;
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });

    this.getAttendances();
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
      imagenes: this.fileByteArray      
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
        this.currentInput = "";
        this.fileByteArray = [];

        this.getAttendances();
        this.attendanceAdded.emit();
      });
  }

  public onFileSelected(event) {
    let files = event.target.files;
    if (files.length > 0) {
      
      for(var i = 0; i < files.length; i++){
        let fileReader = new FileReader();

        fileReader.onload = (e: any) => {
          let image = new Image();
  
          image.src = e.target.result;
          image.onload = rs => {
            this.fileByteArray.push(e.target.result);
          };
        };
        
        fileReader.readAsDataURL(files[i]);    
      };
    };
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
            if (respPing == "error") {
              this.dialog.open(DialogOffServiceComponent).disableClose = true;
              this.selectedValue = "";
              return;
            }
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
            if (respPing == "error") {
              this.dialog.open(DialogOffServiceComponent).disableClose = true;
              this.selectedValue = "";
              return;
            }
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

  public getAttendances() {
    let reqAtt: IAsistenciaRequest = <IAsistenciaRequest>{
      dni: parseInt(sessionStorage.getItem("dni")),
    };

    this._service.asistencias(reqAtt).then((asistencias: IAsistencia[]) => {
      this.attendances = asistencias;
    });
  }

  public existeServicioEnCurso(idServicio: string): boolean {
    if (this.attendances) {
      return this.attendances.find(
        (a) => a.idServicio === idServicio && a.estado === "activo"
      )
        ? true
        : false;
    }
    return false;
  }
}
