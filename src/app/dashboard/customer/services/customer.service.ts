import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class CustomerService{
  private apiUrl="http://192.168.29.79/AddBrand";

  constructor(private http:HttpClient){}


}
