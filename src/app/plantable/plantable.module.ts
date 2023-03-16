import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdModalComponentModule } from './../common/Modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantableRoutingModule } from './plantable-routing.module';
import { PlanviewComponent } from './planview/planview.component';
import { PlaneditComponent } from './planedit/planedit.component';
import { AddPlanComponent } from './add-plan/add-plan.component';


@NgModule({
  declarations: [
    PlanviewComponent,
    PlaneditComponent,
    AddPlanComponent
  ],
  imports: [
    CommonModule,
    PlantableRoutingModule,
    NgbdModalComponentModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlantableModule { }
