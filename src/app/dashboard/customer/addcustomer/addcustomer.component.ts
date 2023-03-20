import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customerForm!:FormGroup;

  get f(){ return this.customerForm.controls; }

  ngOnInit(): void {
      this.customerForm=new FormGroup({
        'first_name':new FormControl('',[Validators.required,Validators.minLength(5)]),
        'last_name':new FormControl('',[Validators.required,Validators.minLength(5)]),
        'date_of_birth':new FormControl('',[Validators.required]),
        'address':new FormControl('',[Validators.required]),
        'village':new FormControl('',[Validators.required]),
        'pin':new FormControl('',[Validators.required,Validators.maxLength(6)]),
        'city':new FormControl('',[Validators.required]),
        'district':new FormControl('',[Validators.required]),
        'state':new FormControl('',[Validators.required]),
        'mobile_number':new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{10}")]),
        'email-id':new FormControl('',[Validators.required]),
        'aadhar_card':new FormControl('',[Validators.required,Validators.minLength(12)]),
        'pan_card':new FormControl('',[Validators.required]),
      })
    }
    
     onlynumbersallowed (event):boolean{
      event = (event) ? event : window.event;
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
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