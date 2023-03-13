import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './settings/setting.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'settings',component:SettingComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
