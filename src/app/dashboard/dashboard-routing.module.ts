import { NotificationComponent } from './notification/notification.component';
import { SettingComponent } from './settings/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'settings',component:SettingComponent,canActivate:[AuthGuard]},
  {path:'notification',component:NotificationComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
