import { Component, OnInit } from "@angular/core";
import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { IChat } from "src/app/core/api/models/i-chat";
import { IChatReq } from "src/app/core/api/models/i-chat-req";
import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { Router } from "@angular/router";
import { ILogin } from "src/app/core/api/models/i-login";
import { MatDialog } from "@angular/material/dialog";
import { DialogInactiveComponent } from "../../auth/dialog-inactive/dialog-inactive.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  hidden = false;
  chat: string;
  text: string;
  asistencia: number;

  private _chats: IChat[];

  public get chats(): IChat[] {
    return this._chats;
  }
  public set chats(value: IChat[]) {
    this._chats = value;
  }

  constructor(
    private _service: PortalResourceService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.hidden = !this.hidden;
    let reqChat: IChatReq = <IChatReq>{
      idUsuario: parseInt(sessionStorage.getItem("dni")),
    };

    this._service.chats(reqChat).then((chats: IChat[]) => {
      this._chats = chats;
    });
  }

  public sendChat(text: string, asistencia: number) {
    this.text = text;
    this.asistencia = asistencia;

    let reqChat: IChat = <IChat>{
      idAsistencia: asistencia,
      dato: text,
    };

    this._service.chat(reqChat).then((chat: IChat) => {
      //TODO HACER QUE SE MUESTRE EL MENSAJE
      this._snackBar.open("Mensaje enviado", "", {
        duration: 3000,
        panelClass: ["alert-green"],
      });

      this.ngOnInit();
    });
  }

  public closeChat(asistencia: number) {
    //ABRIR MODAL PARA INGRESAR MOTIVO

    let reqDelete: IAsistencia = <IAsistencia>{
      id: asistencia,
      idUsuario: parseInt(sessionStorage.getItem("dni")),
    };

    this._service.delete(reqDelete).then((login: ILogin) => {
      this._snackBar.open("Asistencia cancelada", "", {
        duration: 3000,
        panelClass: ["alert-green"],
      });

      this.ngOnInit();

      if (login.habilitado == "N") {
        this.dialog.open(DialogInactiveComponent).disableClose = true;
        this.router.navigate(["/login"]);
      }
    });
  }

  chatSeleccionado: IChat;
  public viewChat(chat: IChat) {
    this.chatSeleccionado = chat;
    console.log(this.chatSeleccionado);
  }
}
