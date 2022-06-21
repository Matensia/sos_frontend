import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from "@angular/router";

import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { IChat } from "src/app/core/api/models/i-chat";
import { throwError } from "rxjs";
import { IChatReq } from "src/app/core/api/models/i-chat-req";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.css"],
})
export class PortalComponent implements OnInit {
  email_bind = sessionStorage.getItem("email");
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: "home", route: "news", icon: "home" },
    { name: "servicios", route: "services", icon: "call" },
    { name: "historico", route: "historical", icon: "sd_storage" },
    { name: "messages", route: "message", icon: "question_answer" },
  ];

  sessionAttendances: IChat[];

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.home();
    //this.getChats();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public home() {
    this.router.navigate(["/portal/news"]);
  }

  public historic() {
    this.router.navigate(["/portal/historical"]);
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
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
}
