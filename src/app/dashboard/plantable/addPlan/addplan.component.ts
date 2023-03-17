import { NgbdModalContentComponent } from '../../../common/Modal/modal.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddPlanComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  planForm!:FormGroup;
  submitted:boolean=false;
  planid:string;
  isEditMode:boolean=false;


constructor(private modalService:NgbModal,
            private fb:FormBuilder,
            public router:Router
    ){
      this.planForm=this.fb.group({
        name:['',[Validators.required]],
        type:['',[Validators.required]],
        validity:['',[Validators.required]],
        charges:['',[Validators.required]],
        gst:['',[Validators.required]],
        description:['']
      })
    }


    ngOnInit(): void {
      this.planid=localStorage.getItem('planId');
    }



    onSubmit(){
      this.closebutton.nativeElement.click();

      this.planForm.patchValue({
        planId:this.planid
      })

    }
}
