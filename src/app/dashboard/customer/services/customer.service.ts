import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Model/customer';
@Injectable({
  providedIn:'root'
})
export class CustomerService{
  private apiUrl="http://192.168.29.79/AddBrand";

  constructor(private http:HttpClient){}
 
  addcustomer(cust:any){
   return this.http.post(this.apiUrl + '/register',cust)
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
