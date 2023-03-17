import { PlanService } from './services/plan.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/Model/plan';


@Component({
  templateUrl:'./plantable.component.html',
})
export class PlanTableComponent implements OnInit{
  plans:Observable<Plan[]>;

  @Input() deleteConfirmation;

  planTable:Plan[]=[];
  showNew:boolean=false;
  planType:string[]=['Gold','Silver','Platinum'];
  planModel:Plan;



  constructor(public router:Router,private planService:PlanService,private activeRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.planTable=this.planService.getPlanList();
  }



  updatePlan(id:number){

  }

  delete=(id:number)=>{

  }
}
