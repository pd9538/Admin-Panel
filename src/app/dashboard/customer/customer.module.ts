import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CustomerComponent,
    AddcustomerComponent,
    
    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class CustomerModule { }
