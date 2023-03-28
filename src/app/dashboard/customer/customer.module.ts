import { CustSortableHeaderDirective } from './services/custsortable-header.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFilterPipe } from './services/customer-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    CustomerComponent,
    AddcustomerComponent,
    CustomerViewComponent,
    CustomerFilterPipe,
    CustSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CustomerModule { }
