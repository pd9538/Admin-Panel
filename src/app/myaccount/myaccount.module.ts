import { SettingComponent } from './settings/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaccountRoutingModule } from './myaccount-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    MyaccountRoutingModule
  ]
})
export class MyaccountModule { }
