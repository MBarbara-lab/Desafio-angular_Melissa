import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: "",
    pathMatch:"full",
    component: LoginComponent
  },
  {
    path: "login",
    pathMatch:"full",
    component: LoginComponent
  },
  {
    path: "home",
    pathMatch:"full",
    canActivate: [loginGuard],
    component: HomeComponent
  },
  {
    path: "dashboard",
    pathMatch:"full",
    canActivate: [loginGuard],
    component: DashboardComponent
  }
];
