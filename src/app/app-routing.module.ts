import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./modules/components/login/login.component";

const routes: Routes = [
  {
    path: "main",
    canLoad: [AuthGuard],
    loadChildren: "./modules/main.module#MainModule",
  },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
