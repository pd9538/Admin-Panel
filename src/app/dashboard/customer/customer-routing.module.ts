import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent,canActivate:[AuthGuard]},
  {path:'add-customer',component:AddcustomerComponent,canActivate:[AuthGuard]},
  {path:'edit-customer/:id',component:AddcustomerComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
