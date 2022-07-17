import { Component, OnInit } from "@angular/core";
import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { IAsistenciaRequest } from "src/app/core/api/models/i-asistencia-req";
import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogHistoryComponent } from "../dialog-history/dialog-history.component";
import { IChat } from "src/app/core/api/models/i-chat";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-historical",
  templateUrl: "./historical.component.html",
  styleUrls: ["./historical.component.css"],
})
export class HistoricalComponent implements OnInit {
  private _chats: IChat[];

  public get chats(): IChat[] {
    return this._chats;
  }
  public set chats(value: IChat[]) {
    this._chats = value;
  }
  asistencias: IAsistencia[];

  constructor(
    private _service: PortalResourceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    let reqHistorical: IAsistenciaRequest = <IAsistenciaRequest>{
      dni: parseInt(sessionStorage.getItem("dni")),
    };

    this._service
      .asistencias(reqHistorical)
      .then((asistencias: IAsistencia[]) => {
        this.asistencias = asistencias;
      });
  }

  public detail(idAsistencia: number) {
    this._service
      .chatByAttendance({ attendance: idAsistencia })
      .then((chat: IChat[]) => {
        this._chats = chat;
        this.dialog.open(DialogHistoryComponent, {
          data: this._chats,
        }).disableClose = true;
      });
  }
}
