import { PlaneditComponent } from './planedit/planedit.component';
import { PlanviewComponent } from './planview/planview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'planview',component:PlanviewComponent},
  { path:'planedit',component:PlaneditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantableRoutingModule { }
