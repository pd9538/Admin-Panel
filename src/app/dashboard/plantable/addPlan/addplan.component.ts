import { PlanService } from './../services/plan.service';
import { NgbdModalContentComponent } from '../../../common/Modal/modal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  planid:string;

  get f(){ return this.planForm.controls; }

constructor(private modalService:NgbModal,
            private fb:FormBuilder,
            public router:Router,
            private activeRoute:ActivatedRoute,
            private planService:PlanService
    ){}
    ngOnInit(): void {
      this.getPlan();
      this.planForm=new FormGroup({
        'name':new FormControl('',[Validators.required]),
        'type':new FormControl('',[Validators.required]),
        'validity':new FormControl('',[Validators.required]),
        'charges':new FormControl('',[Validators.required]),
        'gst':new FormControl('',[Validators.required]),
        'description':new FormControl('',[Validators.required])
      })
    }

    getPlan(){
      this.editplanId=this.activeRoute.snapshot.params.id;
        if(this.editplanId!=undefined){
          this.planService.getPlanById(this.editplanId).subscribe((plan:any)=>{
            this.planForm.patchValue({
              name:plan.data.name,
              type:plan.data.type,
              validity:plan.data.validity,
              charges:plan.data.charges,
              gst:plan.data.gst,
              description:plan.data.description
            })
          })
        }
    }



   savePlan(){
      if(this.editplanId){
        this.planService.updatePlan(this.editplanId,this.planForm.value);
      }else{
        let planData=this.planForm.value;
        this.planService.createPlan(planData);
      this.planForm.reset();
      this.router.navigate(['/root/dashboard/plantable/planview']);
    }
  }


}
