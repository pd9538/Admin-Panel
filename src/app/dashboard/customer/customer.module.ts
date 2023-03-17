import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
