import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit {
  email_bind = sessionStorage.getItem("email");

  constructor(private router: Router) {}

  ngOnInit() {
    this.home();
  }

  public home() {
    this.router.navigate(["/main/portal"]);
  }

  public historic() {
    this.router.navigate(["main/historical"]);
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
