import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/Model/customer";
import { CustomerService } from "./services/customer.service";

@Component({
    templateUrl:'./customer.component.html',
    styleUrls:['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    customerTable:Customer[]=[];
    customer:any;

    constructor(private custService:CustomerService){}

    ngOnInit(): void{
        this.reloadData();
    }
    reloadData(){
        this.custService.getAllCustomer().subscribe((customer:any)=>{
            console.log(customer)
            this.customer=customer;
            this.customerTable=this.customer.data;
        })
    }
    
}