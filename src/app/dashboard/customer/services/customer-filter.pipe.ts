import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './../../../Model/customer';


@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {
  customer_type:string;
  status:string;

  transform(value: any[], searchString:string): any[] {


    if(!value){
    return [];
    }

    if(!searchString){
      return value;
    }

    searchString=searchString.toLowerCase();

    return value.filter(customer=>{

      if(customer.status==1){
        this.status="Active"
      }
      else if(customer.status==2){
        this.status="Inactive"
      }


      if(customer.customer_type==1){
        this.customer_type="Basic"
      }
      else if(customer.customer_type==2){
        this.customer_type="Prime"
      }


      return customer.customer_id.includes(searchString) ||
      customer.name.toLowerCase().includes(searchString) ||
      this.customer_type.toLowerCase().includes(searchString) ||
      customer.district.toLowerCase().includes(searchString) ||
      customer.email.toLowerCase().includes(searchString) ||
      customer.mobile.includes(searchString) ||
      customer.pincode.includes(searchString) ||
      this.status.toLowerCase().includes(searchString) ||
      customer.plan_id.includes(searchString) ||
      customer.state.toLowerCase().includes(searchString) ||
      customer.wallet_balance.includes(searchString)
    })

  }

}
