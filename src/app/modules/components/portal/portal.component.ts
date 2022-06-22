import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IChat } from "src/app/core/api/models/i-chat";
import { IChatReq } from "src/app/core/api/models/i-chat-req";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.css"],
})
export class PortalComponent implements OnInit {
  sessionAttendances: IChat[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    //this.getChats();
  }

  private isThereNewMessages(attendances: IChat[]): boolean {
    var result = false;

    if (!this.sessionAttendances) {
      this.sessionAttendances = attendances;
    }

    this.sessionAttendances.forEach((att: IChat) => {
      var coincidencia = attendances.find(
        (a) => a.idAsistencia === att.idAsistencia
      );

      if (coincidencia.dataChat.length != att.dataChat.length) {
        result = true;
        return;
      }
    });

    return result;
  }

  public getChats() {
    const requestBody: IChatReq = {
      idUsuario: +sessionStorage.getItem("dni"),
    };

    this.httpClient
      .post(
        `http://localhost:8080/GobiernoRest/api/attendance/chats`,
        requestBody
      )
      .pipe(
        catchError((error) => {
          return throwError(JSON.stringify(error));
        })
      )
      .subscribe((attendances: IChat[]) => {
        if (this.isThereNewMessages(attendances)) {
          this.sessionAttendances = attendances;
          alert("tenes un nuevo mensaje wachin");
        }

        setTimeout(() => {
          this.getChats();
        }, 6000);
      });
  }
}
