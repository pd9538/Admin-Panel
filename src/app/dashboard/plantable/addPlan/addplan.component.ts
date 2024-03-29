import { PlanService } from './../services/plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddPlanComponent implements OnInit {
  planForm!:FormGroup;
  submitted:boolean=false;
  editplanId:number;
  isEditMode:boolean=false;
  event:any;
  isAddMode:boolean;
  checkbox_checked:boolean;
  state:number;
  status:string;
  plan_type:string;

  get f(){ return this.planForm.controls; }

constructor(public router:Router,
            private fb:FormBuilder,
            private activeRoute:ActivatedRoute,
            private planService:PlanService
    ){
      this.planForm=this.fb.group({
        plan_id:[this.editplanId,{hidden:true}],
        plan_name:['',[Validators.required]],
        plan_type:['',[Validators.required]],
        validity_days:['',[Validators.required]],
        charges:['',[Validators.required]],
        gst:['',[Validators.required]],
        description:['',[Validators.required]],
        discount:['',[Validators.required]],
        status:[''],
        first_time_applicable:['',[]]
      })
    }
    ngOnInit(): void {
      this.getPlan();
      this.isAddMode=!this.editplanId;
    }

    getPlan(){
      this.editplanId=this.activeRoute.snapshot.params.id;
        if(this.editplanId!=undefined){
          this.planService.getPlanById(this.editplanId).subscribe((plan:any)=>{
            console.log(plan)
            if(plan.data.status==1){
              this.status="Active";
            }
            else{
              this.status="Inactive";
            }
            if(plan.data.plan_type==1){
              this.plan_type="Gold";
            }
            else if(plan.data.plan_type==2){
              this.plan_type="Silver";
            }
            else if(plan.data.plan_type==3){
              this.plan_type="Platinum";
            }
            else{
              this.plan_type="";
            }
            this.planForm.patchValue({
              plan_name:plan.data.plan_name,
              plan_type:this.plan_type,
              validity_days:plan.data.validity_days,
              charges:plan.data.charges,
              gst:plan.data.gst,
              description:plan.data.description,
              discount:plan.data.discount,
              first_time_applicable:plan.data.first_time_applicable,
              plan_id:plan.data.plan_id,
              status:this.status
            })
          })
        }
    }

   savePlan(){
    this.editplanId=this.activeRoute.snapshot.params.id;
      if(!this.isAddMode){
        this.planService.updatePlan(this.planForm.value).subscribe((res:any)=>{
          if(res.status==1){
            Swal.fire(res.message,'','success');
            this.router.navigate(['root/dashboard/plantable/planview']);
          }
          else{
            Swal.fire(res.message,'','error');
          }
        })
      }else{
        let planData=this.planForm.value;
        this.planService.createPlan(planData).subscribe((data:any)=>{
          if(data.message!='Invalid Parameters'&& data.status==1){
          Swal.fire(data.message,'','success');
          this.planForm.reset();
          this.router.navigate(['/root/dashboard/plantable/planview']);
          }
          else{
            Swal.fire(data.message,'','error');
          }
        })

    }
  }

  selected(event:any){
    this.event=event.target.checked;
    if(this.event){
     return this.event=1;
    }
    else{
     return this.event=0;
    }
  }

}
