import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customerForm!:FormGroup;
  editCustId:number;
  isAddMode:boolean;
  status:String;
  type:string;

 constructor(private custService:CustomerService,
             public router:Router,
             public activeRoute:ActivatedRoute,
             private fb:FormBuilder
      ){
          this.customerForm=this.fb.group({
            customer_id:[this.editCustId,{hidden:true}],
            name:['',[Validators.required]],
            customer_type:[''],
            address:['',[Validators.required]],
            pincode:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{6}')]],
            district:['',[Validators.required]],
            state:['',[Validators.required]],
            mobile:['',[Validators.required,Validators.pattern("^([0-9]{10})$")]],
            email:['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
            plan_id:['',[]],
            status:['',[]]
          })

 }
  get f(){ return this.customerForm.controls; }

  ngOnInit(): void {
    this.getCustomer();
    this.isAddMode=!this.editCustId;
  }

     onlynumbersallowed (event):boolean{
      event = (event) ? event : window.event;
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
  }

  getCustomer(){
    this.editCustId=this.activeRoute.snapshot.params.id;
    if(this.editCustId!=undefined){
      this.custService.getCustById(this.editCustId).subscribe((customer:any)=>{
        if(customer.data.status==1){
          this.status="Active";
        }
        else{
          this.status="Inactive";
        }

        if(customer.data.customer_type==1){
          this.type="Basic";
        }
        else if(customer.data.customer_type==2){
          this.type="Prime";
        }
        else{
          this.type="";
        }
          this.customerForm.patchValue({
          customer_id:customer.data.customer_id,
          name:customer.data.name,
          customer_type:this.type,
          plan_id:customer.data.plan_id,
          address:customer.data.address,
          pincode:customer.data.pincode,
          district:customer.data.district,
          state:customer.data.state,
          mobile:customer.data.mobile,
          email:customer.data.email,
          status:this.status
        })
      })
    }
  }

  saveCustomer(){
      let formData=this.customerForm.value;
      if(!this.isAddMode){
        this.custService.updateCustomer(this.customerForm.value).subscribe((data:any)=>{
          if(data.status==1){
            Swal.fire(data.message,'','success');
            this.router.navigate(['root/dashboard/customer/customer']);
            this.customerForm.reset();
          }
          else{
            Swal.fire(data.message,'','error');
          }
        })
      }else{
      this.custService.addcustomer(formData).subscribe((result:any)=>{
        if(result.status==1){
          Swal.fire(result.message,'','success');
          this.router.navigate(['root/dashboard/customer/customer']);
          this.customerForm.reset();
        }
        else{
          Swal.fire(result.message,'','error');
        }
      })
    }
  }


//   ValidateEmail(event)
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(customerForm.email-id.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

}
