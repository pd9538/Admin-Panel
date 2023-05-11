import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Model/customer';
import { PlanService } from '../../plantable/services/plan.service';
@Injectable({
  providedIn:'root'
})
export class CustomerService{
  private apiUrl="http://192.168.29.79/AddBrand";

  constructor(private http:HttpClient,
              private planService:PlanService
      ){}

  addcustomer(cust:any){
   return this.http.post(this.apiUrl + '/register',cust)
  }

  getPlanList(){
    return this.planService.getPlanList();
  }

  getPlanById(id:any){
    return this.planService.getPlanById(id);
  }

  updateCustomer(data:any){
    return this.http.post<Customer>(this.apiUrl+'/editCustomer',data);
  }

  getCustById(cust_id:number):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl+'/editcustomer-id',{"customer_id":cust_id});
  }

  getAllCustomer(){
    return this.http.get<Customer>(this.apiUrl+'/customers');
  }
}
