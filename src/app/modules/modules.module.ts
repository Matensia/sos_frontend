import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";

import { ModulesRoutingModule } from "./modules-routing.module";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "../modules/auth/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogSignComponent } from "./auth/dialog-sign/dialog-sign.component";
import { DialogInactiveComponent } from "./auth/dialog-inactive/dialog-inactive.component";
import { DialogHistoryComponent } from "./portal/dialog-history/dialog-history.component";
import { NewsComponent } from "./portal/news/news.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material/divider";
import { MatBadgeModule } from "@angular/material/badge";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AgmCoreModule } from "@agm/core";

import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
} from "@angular/material";
import { PortalComponent } from "./portal/portal/portal.component";
import { ServicesComponent } from "./portal/services/services.component";
import { HistoricalComponent } from "./portal/historical/historical.component";
import { MessagesComponent } from "./portal/messages/messages.component";

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    DialogSignComponent,
    DialogInactiveComponent,
    DialogHistoryComponent,
    NewsComponent,
    PortalComponent,
    ServicesComponent,
    HistoricalComponent,
    MessagesComponent,
  ],
  entryComponents: [
    DialogSignComponent,
    DialogInactiveComponent,
    DialogHistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ModulesRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    GoogleMapsModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatCarouselModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatBadgeModule,
    BrowserModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAHg4VOwzdcnAOSrCAR7B1cF6sgdR3h318",
    }),
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ModulesRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatCarouselModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatBadgeModule,
    BrowserModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    AgmCoreModule,
  ],
})
export class ModulesModule {}
