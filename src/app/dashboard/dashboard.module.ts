import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './settings/setting.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SettingComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
