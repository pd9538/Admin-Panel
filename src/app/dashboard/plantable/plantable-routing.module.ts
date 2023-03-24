import { PlanTableComponent } from './plantable.component';
import { AuthGuard } from './../../auth/auth.guard';
import { AddPlanComponent } from './addPlan/addplan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'planview',component:PlanTableComponent,canActivate:[AuthGuard],pathMatch:'full'},
  { path:'add-plan',component:AddPlanComponent,canActivate:[AuthGuard],pathMatch:'full'},
  { path:'edit/:id',component:AddPlanComponent,canActivate:[AuthGuard],pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantableRoutingModule { }
