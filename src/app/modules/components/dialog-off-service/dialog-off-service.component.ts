import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dialog-off-service",
  templateUrl: "./dialog-off-service.component.html",
  styleUrls: ["./dialog-off-service.component.css"],
})
export class DialogOffServiceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOffServiceComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
