import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-inactive",
  templateUrl: "./dialog-inactive.component.html",
  styleUrls: ["./dialog-inactive.component.css"],
})
export class DialogInactiveComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogInactiveComponent>) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
