import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CoreModule } from '../core/core.module';

import { ModulesRoutingModule } from './modules-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from '../modules/auth/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DialogSignComponent } from './auth/dialog-sign/dialog-sign.component';
import { NewsComponent } from './portal/news/news.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
 


import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';
import { PortalComponent } from './portal/portal/portal.component';
import { ServicesComponent } from './portal/services/services.component';
import { HistoricalComponent } from './portal/historical/historical.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    DialogSignComponent,
    NewsComponent,
    PortalComponent,
    ServicesComponent,
    HistoricalComponent
  ],
  entryComponents: [DialogSignComponent],
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
    MatTableModule
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
    MatTableModule
  ]
})
export class ModulesModule { }
