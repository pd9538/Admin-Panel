import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  custData:Customer[]=[];
  cust:any;
  custId:number;
  
  customer_id:number;
  customer_type:string;
  name:string;
  address:string;
  district:string;
  state:number;
  pincode:number;
  mobile:string;
  email:string;
  status:boolean;
  plan:string;
  referid:number;
  balance:number;
  plan_id:number;
  refered_by:number;
  wallet_balance:number;

    constructor(private custService:CustomerService,private actRoute:ActivatedRoute){}
    ngOnInit(): void {
      this.custId=this.actRoute.snapshot.params.id;
      this.custService.getCustById(this.custId).subscribe((result:any)=>{
          this.cust=result;
          this.custData=Object.values(this.cust);

          this.customer_id=this.custData[1].customer_id;
          this.name=this.custData[1].name;
          this.customer_type=this.custData[1].customer_type;
          this.address=this.custData[1].address;
          this.district=this.custData[1].district;
          this.state=this.custData[1].state;
          this.pincode=this.custData[1].pincode;
          this.mobile=this.custData[1].mobile;
          this.email=this.custData[1].email;
          this.status=this.custData[1].status;
          this.plan=this.custData[1].plan;
          this.referid=this.custData[1].referid;
          this.balance=this.custData[1].balance;
          this.plan_id=this.custData[1].plan_id;
          this.refered_by=this.custData[1].refered_by;
          this. wallet_balance=this.custData[1].wallet_balance;
      })
      }
      
     

    
        
    
  
}