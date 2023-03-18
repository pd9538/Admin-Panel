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
        'pin':new FormControl('',[Validators.required,Validators.minLength(6)]),
        'city':new FormControl('',[Validators.required]),
        'district':new FormControl('',[Validators.required]),
        'state':new FormControl('',[Validators.required]),
        'mobile_number':new FormControl('',[Validators.required,Validators.minLength(10)]),
        'email-id':new FormControl('',[Validators.required]),
        'aadhar_card':new FormControl('',[Validators.required,Validators.minLength(12)]),
        'pan_card':new FormControl('',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]),
        
      })
  }

}
