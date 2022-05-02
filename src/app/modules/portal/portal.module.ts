import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PortalComponent } from './portal/portal.component';
import { ServicesComponent } from './services/services.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HistoricalComponent } from './historical/historical.component';
import {MatTableModule} from '@angular/material/table';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [NewsComponent, PortalComponent, ServicesComponent, ServicesComponent, HistoricalComponent, MessagesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTableModule
  ]
})
export class PortalModule { }
