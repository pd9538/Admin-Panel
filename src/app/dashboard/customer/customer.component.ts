import { Router } from '@angular/router';
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Customer } from "src/app/Model/customer";
import { CustomerService } from "./services/customer.service";
import { CustSortableHeaderDirective,SortEvent,compare } from './services/custsortable-header.directive';

@Component({
    templateUrl:'./customer.component.html',
    styleUrls:['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    customerTable:Customer[]=[];
    customer:any;
    cust_type:string;
    custData:any;
    searchString:string;
    tableName:Customer;
    page:number=1;
    count:number=0;
    tableSize:number=7;
    tableSizes:any=[3,6,9,12];
    cust:any;
    custResult:any[]=[];

    planDetails:any;
    planTable:any[]=[];
    planname:any;

    showModal:boolean;

    config={
      id:'custom',
      itemsPerPage:7,
      currentPage:1,
      totalItems:0
    }


    data:Array<Customer>=this.customerTable;
    @ViewChildren(CustSortableHeaderDirective) headers:QueryList<CustSortableHeaderDirective>;

    constructor(private custService:CustomerService,
                private router:Router){}

    ngOnInit(): void{
        this.reloadData();
    }

    reloadData(){
        this.custService.getAllCustomer().subscribe((customer:any)=>{
            this.customer=customer;
            this.customerTable=this.customer.data;
        });
    }



    updateCustomer(id:number){
      this.router.navigate(['/root/dashboard/customer/edit-customer',id]);
    }

    customerView(id:number){
      this.router.navigate(['/root/dashboard/customer/customer-view',id]);
    }

    onTableDataChange(event:any){
      this.page=event;
      this.reloadData();
    }

    onTableSizeChange(event:any){
      this.tableSize=event.target.value;
      this.page=1;
      this.reloadData();
    }

    onSort({column,direction}:SortEvent){
      this.custService.getAllCustomer().subscribe((data:any)=>{
        this.custData=data;
        this.data=this.custData.data;

        this.headers.forEach((header)=>{
          if(header.sortable!==column){
            header.direction='';
          }
        });

        if(direction==='' || column===''){
          this.customerTable=this.data;
          console.log(this.customerTable);
        }
        else{
          this.customerTable=[...this.data].sort((a,b)=>{
            const res=compare(a[column],b[column]);
            return direction==='asc' ? res : -res;
          });
        }
      })
    }

    // onClick(){
    //   this.showModal=true;
    // }

  //  onRowClick(event,row){
  //     console.log(row.address);
  //  }
}
