import { PlanTableComponent } from './plantable.component';
import { AuthGuard } from './../../auth/auth.guard';
import { AddPlanComponent } from './addPlan/addplan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'planview',component:PlanTableComponent,canActivate:[AuthGuard]},
  { path:'add-plan',component:AddPlanComponent,canActivate:[AuthGuard]},
  { path:'add-plan/:id',component:AddPlanComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantableRoutingModule { }
