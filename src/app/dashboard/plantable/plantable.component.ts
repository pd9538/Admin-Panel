import { AddPlanComponent } from './addPlan/addplan.component';
import { HttpClient } from '@angular/common/http';
import { PlanService } from './services/plan.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/Model/plan';


@Component({
  templateUrl:'./plantable.component.html',
})
export class PlanTableComponent implements OnInit{
  plans:Observable<Plan[]>;
  planTable:Plan[]=[];
  planId:number;
  planlist:any;
  showNew:boolean=false;
  planType:string[]=['Gold','Silver','Platinum'];
  planModel:Plan;
  status:string;
  searchString:string;


  constructor(public router:Router,
    private planService:PlanService,
    private activeRoute:ActivatedRoute,
    ){

  }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData(){
   this.planService.getPlanList().subscribe((result:any)=>{
    this.planlist=result;
    this.planTable=this.planlist.data;
    this.planTable.filter
   })
  }





  updatePlan(id:number){
    this.router.navigate(['/root/dashboard/plantable/edit/',id])
  }

}
