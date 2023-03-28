
import { PlanService } from './services/plan.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Plan } from 'src/app/Model/plan';
import { compare, PlanSortableHeaderDirective, SortEvent } from './services/plansortable-header.directive';


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

  page:number=1;
  count:number=0;
  tableSize:number=7;
  tableSizes:any=[3,6,9,12];

  planData:any;
  data:Array<Plan>=this.planTable;
  @ViewChildren(PlanSortableHeaderDirective) headers:QueryList<PlanSortableHeaderDirective>;
  constructor(public router:Router,
    private planService:PlanService
    ){}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
   this.planService.getPlanList().subscribe((result:any)=>{
    this.planlist=result;
    this.planTable=this.planlist.data;
   })
  }

  updatePlan(id:number){
    this.router.navigate(['/root/dashboard/plantable/edit/',id])
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
    this.planService.getPlanList().subscribe((data:any)=>{
      this.planData=data;
      this.data=this.planData.data;

      this.headers.forEach((header)=>{
        if(header.sortable!==column){
          header.direction='';
        }
      });

      if(direction==='' || column===''){
        this.planTable=this.data;
      }
      else{
        this.planTable=[...this.data].sort((a,b)=>{
          const res=compare(a[column],b[column]);
          return direction==='asc' ? res : -res;
        });
      }
    })
  }


}
