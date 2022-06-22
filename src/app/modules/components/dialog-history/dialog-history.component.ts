import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IChat } from "src/app/core/api/models/i-chat";

@Component({
  selector: "app-dialog-history",
  templateUrl: "./dialog-history.component.html",
  styleUrls: ["./dialog-history.component.css"],
})
export class DialogHistoryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public chats: IChat[]
  ) {}

  ngOnInit() {}

  public closeDialog() {
    this.dialogRef.close();
  }
}
