import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dialog-cancel-att",
  templateUrl: "./dialog-cancel-att.component.html",
  styleUrls: ["./dialog-cancel-att.component.css"],
})
export class DialogCancelAttComponent implements OnInit {
  cancel: boolean = false;
  @Output() event = new EventEmitter<boolean>();

  constructor(private _dialogRef: MatDialogRef<DialogCancelAttComponent>) {}

  ngOnInit() {}

  public closeDialog(): void {
    this._dialogRef.close(false);
  }

  public cancellAtt() {
    this._dialogRef.close(true);
  }
}
