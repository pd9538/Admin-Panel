import { Plan } from 'src/app/Model/plan';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class PlanService{
  private apiUrl="http://192.168.29.79/AddBrand";

  planTable:Plan[]=[];

  constructor(private http:HttpClient){
    this.planTable.push(new Plan(1,'ABC','Gold',320,1500,25));
    this.planTable.push(new Plan(2,'ABC','Silver',480,500,15));
    this.planTable.push(new Plan(3,'ABC','Platinum',120,1000,18));
  }

  getPlanById(id:number){
    return this.planTable.values[id];
    // return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPlan(plan:Plan){
   return this.planTable.push(plan);
    // return this.http.post(`${this.apiUrl}`,plan);
  }

  updatePlan(id:number,value:any){

    // return this.http.put(`${this.apiUrl}/${id}`,value)
  }

  // deletePlan(id:number)Observable<any>{
  //   return this.http.delete(`${this.apiUrl}/${id}`,{responseType:'text'});
  // }

  getPlanList(){
    return this.planTable;
    // return this.http.get(`${this.apiUrl}`);
  }

}
