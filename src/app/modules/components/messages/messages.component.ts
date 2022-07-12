import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { IAsistencia } from "src/app/core/api/models/i-asistencia";
import { IChat } from "src/app/core/api/models/i-chat";
import { IChatReq } from "src/app/core/api/models/i-chat-req";
import { PortalResourceService } from "src/app/core/api/services/portal-resource.service";
import { ILogin } from "src/app/core/api/models/i-login";
import { DialogInactiveComponent } from "../dialog-inactive/dialog-inactive.component";
import { HttpClient } from "@angular/common/http";
import { INewChats } from "src/app/core/api/models/i-new-chats";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  @ViewChild("message", null) message: ElementRef;

  hidden = true;
  chat: string;
  text: string;
  asistencia: number;
  chatSeleccionado: IChat;
  badgeNewMessages = 0;
  showChatService;

  private _chats: IChat[];
  public get chats(): IChat[] {
    return this._chats;
  }
  public set chats(value: IChat[]) {
    this._chats = value;
  }

  private _newMessages: INewChats[];
  public get newMessages(): INewChats[] {
    return this._newMessages;
  }
  public set newMessages(value: INewChats[]) {
    this._newMessages = value;
  }

  constructor(
    private _service: PortalResourceService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getAttendences();
  }

  private findNewMessages(chats: IChat[]): void {
    // La primera vez solo inicializaremos las propiedades locales.
    if (!this._chats) {
      this._chats = chats;
      this._newMessages = this._chats.map((att) => {
        return { idAttendence: att.idAsistencia, count: 0 };
      });
      return;
    }

    // Busca nuevos mensajes comparando los chats en memoria con los nuevos
    let newMsgFound = this._newMessages;
    chats.forEach((att: IChat) => {
      var localAtt = this._chats.find(
        (a) => a.idAsistencia === att.idAsistencia
      );

      // Si la asistencia no existe localmente, es una nueva
      if (!localAtt) {
        // Hacemos un seguimiento de sus nuevos mensajes
        newMsgFound.push({
          idAttendence: att.idAsistencia,
          count: att.dataChat.length,
        });
        return;
      }

      // Omitir esta asistencia si no hay mensajes nuevos
      if (localAtt.dataChat.length === att.dataChat.length) {
        return;
      }

      this.setNewMsgCount(
        att.idAsistencia,
        att.dataChat.length - localAtt.dataChat.length
      );
    });

    let totalNewMsgFound = 0;
    newMsgFound.forEach((n) => {
      totalNewMsgFound += n.count;
    });

    // Solo cambio el conteo si hay mensajes nuevos
    if (totalNewMsgFound !== this.badgeNewMessages) {
      this.badgeNewMessages = totalNewMsgFound;
      this._chats = chats;
      this._newMessages = newMsgFound;
    }
  }

  private setNewMsgCount(idAsistencia: number, count: number) {
    this._newMessages = this._newMessages.map((n) => {
      if (n.idAttendence === idAsistencia) {
        return { ...n, count };
      }
      return n;
    });
  }

  public getAttendences() {
    let reqChat: IChatReq = <IChatReq>{
      idUsuario: parseInt(sessionStorage.getItem("dni")),
    };

    this._service.chats(reqChat).then((chats: IChat[]) => {
      this.findNewMessages(chats);

      if (this.chatSeleccionado) {
        this.chatSeleccionado = this._chats.find(
          (c) => c.idAsistencia === this.chatSeleccionado.idAsistencia
        );
      }

      setTimeout(() => {
        this.getAttendences();
      }, 6000);
    });
  }

  public countNewChats(idAsistencia: number): number {
    return this._newMessages.find((c) => c.idAttendence === idAsistencia).count;
  }

  public sendChat(text: string, asistencia: number) {
    this.text = text;
    this.asistencia = asistencia;

    let reqChat: IChat = <IChat>{
      idAsistencia: asistencia,
      dato: text,
    };

    this._service.chat(reqChat).then((chat: IChat) => {
      this._snackBar.open("Mensaje enviado", "", {
        duration: 3000,
        panelClass: ["alert-green"],
      });

      this.getAttendences();
      this.message.nativeElement.value = "";
    });
  }

  public cancelAttendance(asistencia: number) {
    let reqDelete: IAsistencia = <IAsistencia>{
      id: asistencia,
      idUsuario: parseInt(sessionStorage.getItem("dni")),
    };

    this._service.delete(reqDelete).then((login: ILogin) => {
      this._snackBar.open("Asistencia cancelada", "", {
        duration: 3000,
        panelClass: ["alert-green"],
      });

      this.getAttendences();

      if (login.habilitado == "N") {
        this.dialog.open(DialogInactiveComponent).disableClose = true;
        this.router.navigate(["/login"]);
        return;
      }
      this.chatSeleccionado = undefined;
    });
  }

  public viewChat(chat: IChat) {
    this.chatSeleccionado = chat;
    this.setNewMsgCount(chat.idAsistencia, 0);
  }

  public closeChat() {
    this.chatSeleccionado = undefined;
  }
}
