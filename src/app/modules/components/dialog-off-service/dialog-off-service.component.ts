import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-off-service",
  templateUrl: "./dialog-off-service.component.html",
  styleUrls: ["./dialog-off-service.component.css"],
})
export class DialogOffServiceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOffServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    dialog: MatDialog
  ) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
