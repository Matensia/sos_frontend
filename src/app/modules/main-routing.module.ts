import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HistoricalComponent } from "./components/historical/historical.component";
import { PortalComponent } from "./components/portal/portal.component";

const routes: Routes = [
  {
    path: "portal",
    component: PortalComponent,
  },
  { path: "historical", component: HistoricalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
