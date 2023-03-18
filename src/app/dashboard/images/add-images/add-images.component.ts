import { ImageService } from './../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {
  model:NgbDateStruct;
  date:{ year:number; month:number;}

  imageForm!:FormGroup;
  submitted:boolean=false;
  editImageId:number;
  isEditMode:boolean=false;
  imageid:string;

  get f(){ return this.imageForm.controls; }

  constructor(public router:Router,
    private activeRoute:ActivatedRoute,
    private imageService:ImageService
){}
ngOnInit(): void {
this.getImage();
this.imageForm=new FormGroup({
  'id':new FormControl(),
  'title':new FormControl('',[Validators.required]),
  'name':new FormControl('',[Validators.required]),
  'download_count':new FormControl('',[Validators.required]),
  'view_count':new FormControl('',[Validators.required]),
  'like_count':new FormControl('',[Validators.required]),
  'category':new FormControl('',[Validators.required]),
  'subcategory':new FormControl('',[Validators.required]),
  'description':new FormControl('',[Validators.required]),
  'date':new FormControl('',[Validators.required])
})
}

  getImage(){
    this.editImageId=this.activeRoute.snapshot.params.id;
  }

  saveImage(){
    console.log(this.imageForm.value);
    if(this.editImageId){
      this.imageService.updateImage(this.editImageId,this.imageForm.value);
    }else{
      let imageData=this.imageForm.value;
      this.imageService.createImage(imageData);
    this.imageForm.reset();
    this.router.navigate(['/root/dashboard/images/imageview']);
  }
  }
}
