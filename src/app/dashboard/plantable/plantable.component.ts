import { NgbdModalContentComponent } from './../../common/Modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl:'./plantable.component.html',
})
export class PlanTableComponent implements OnInit{

  @Input() deleteConfirmation;

  constructor(private modalService:NgbModal){}

  ngOnInit(): void {

  }

  openModal(content:any){
    console.log(content);
    this.modalService.open(content,{centered:true})

  }

  open(id:number){
    const modalRef=this.modalService.open(NgbdModalContentComponent,{centered:true});
    modalRef.componentInstance.content='Do you want to delete ?';
    modalRef.componentInstance.sure=()=>this.deleteConfirmation(id);
  }

}
