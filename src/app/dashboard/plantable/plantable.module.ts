import { NgxPaginationModule } from 'ngx-pagination';
import { PlanFilterPipe } from './services/plan-filter.pipe';
import { PlanTableComponent } from './plantable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdModalComponentModule } from 'src/app/common/Modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantableRoutingModule } from './plantable-routing.module';
import { AddPlanComponent } from './addPlan/addplan.component';
import { PlanSortableHeaderDirective } from './services/plansortable-header.directive';




@NgModule({
  declarations: [
    PlanTableComponent,
    AddPlanComponent,
    PlanFilterPipe,
    PlanSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    PlantableRoutingModule,
    NgbdModalComponentModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PlantableModule { }
