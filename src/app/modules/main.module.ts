import { AgmCoreModule } from "@agm/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { MatDividerModule } from "@angular/material/divider";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
} from "@angular/material";

import { ModulesRoutingModule } from "./main-routing.module";
import { CoreModule } from "../core/core.module";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { LoginComponent } from "./components/login/login.component";
import { DialogSignComponent } from "./components/dialog-sign/dialog-sign.component";
import { DialogInactiveComponent } from "./components/dialog-inactive/dialog-inactive.component";
import { DialogHistoryComponent } from "./components/dialog-history/dialog-history.component";
import { NewsComponent } from "./components/news/news.component";
import { PortalComponent } from "./components/portal/portal.component";
import { ServicesComponent } from "./components/services/services.component";
import { HistoricalComponent } from "./components/historical/historical.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { DialogOffServiceComponent } from "./components/dialog-off-service/dialog-off-service.component";

@NgModule({
  declarations: [
    LoginComponent,
    DialogSignComponent,
    DialogInactiveComponent,
    DialogHistoryComponent,
    NewsComponent,
    PortalComponent,
    ServicesComponent,
    HistoricalComponent,
    MessagesComponent,
    ToolbarComponent,
    DialogOffServiceComponent,
  ],
  entryComponents: [
    DialogSignComponent,
    DialogInactiveComponent,
    DialogHistoryComponent,
    DialogOffServiceComponent,
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
    MatDividerModule,
    MatBadgeModule,
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
    MatDividerModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    AgmCoreModule,
  ],
})
export class MainModule {}
