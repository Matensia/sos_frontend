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

  public closeDialog() {
    this._dialogRef.close();
  }

  public cancellAtt() {
    this.cancel = true;
    this.event.emit(this.cancel);
    //VER COMO ENVIAR ESTE DATO AL PADRE
  }
}
