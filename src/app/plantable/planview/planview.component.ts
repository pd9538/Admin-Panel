import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbdModalContentComponent } from './../../common/Modal/modal.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-planview',
  templateUrl: './planview.component.html',
  styleUrls: ['./planview.component.css']
})
export class PlanviewComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  @Input() deleteConfirmation;
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
        gst:['',[Validators.required]]
      })
    }


    ngOnInit(): void {
      this.planid=localStorage.getItem('planId');
    }


    openModal(content:any){
      this.modalService.open(content,{centered:true}).dismissed

    }

    open(id:number){
      const modalRef=this.modalService.open(NgbdModalContentComponent,{centered:true});
      modalRef.componentInstance.content='Do you want to delete ?';
      modalRef.componentInstance.sure=()=>this.deleteConfirmation(id);
    }

    onSubmit(){
      this.closebutton.nativeElement.click();
    }
}
