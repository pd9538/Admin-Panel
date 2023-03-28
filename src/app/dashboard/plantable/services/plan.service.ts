import { Plan } from 'src/app/Model/plan';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class PlanService{
  private apiUrl="http://192.168.29.79/AddBrand";

  constructor(private http:HttpClient){}

  getPlanById(plan_id:number):Observable<Plan>{
    return this.http.post<Plan>(this.apiUrl+'/editplan-id',{"plan_id":plan_id});
  }

  createPlan(plan:Plan){
     return this.http.post(this.apiUrl+'/addPlan',plan);
  }

  updatePlan(value:any):Observable<Plan>{
    return this.http.post<Plan>(this.apiUrl+'/editPlan',value);
  }

  getPlanList(){
    return this.http.get(this.apiUrl+'/plan');
  }
}
