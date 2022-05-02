import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricalComponent } from './portal/historical/historical.component';
import { MessagesComponent } from './portal/messages/messages.component';
import { NewsComponent } from './portal/news/news.component';
import { PortalComponent } from './portal/portal/portal.component';
import { ServicesComponent } from './portal/services/services.component';

const routes: Routes = [
  { path: 'portal', component: PortalComponent,
  children: [
    { path: 'news', component: NewsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'historical', component: HistoricalComponent },
    { path: 'message', component: MessagesComponent },
    { path: '', component: NewsComponent },
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
