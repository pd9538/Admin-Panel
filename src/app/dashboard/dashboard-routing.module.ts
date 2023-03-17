import { NotificationComponent } from './notification/notification.component';
import { AuthGuard } from './../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]},

  {path:'notification',component:NotificationComponent,canActivate:[AuthGuard]},

  {path:"customer",
    loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
