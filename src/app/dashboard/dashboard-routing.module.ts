
import { AuthGuard } from './../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]},

  {
    path:"myaccount",
    loadChildren:()=>import('./myaccount/myaccount.module').then(m=>m.MyaccountModule)
  },
  {
    path:"plantable",
    loadChildren:()=>import('./plantable/plantable.module').then(m=>m.PlantableModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
