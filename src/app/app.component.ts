import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  windowWidth: string | any | number;
  showSplash: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = +"-" * window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 2000);
  }
}
