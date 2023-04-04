import { HttpClient } from '@angular/common/http';
import { ImageService } from './../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Component,  OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent implements OnInit {

  imageForm!:FormGroup;
  submitted:boolean=false;
  editImageId:number;
  isEditMode:boolean=false;
  imageid:string;
  isAddMode:boolean;
  extens:string;
  form2:FormGroup;

  userImage:string;
  url:URL;

  selectedFile:File;
  private apiUrl="http://192.168.29.79/AddBrand";
  fd=new FormData();
  file:Blob;

  get f(){ return this.imageForm.controls; }

  constructor(public router:Router,
    private activeRoute:ActivatedRoute,
    private imageService:ImageService,
    private fb:FormBuilder,
    public http:HttpClient
){
  // this.imageForm=this.fb.group({
  //   image_id:[this.editImageId,{hidden:true}],
  //   image_title:['',[Validators.required]],
  //   description:['',[Validators.required]],
  //   category_id:['',[Validators.required]],
  //   subcategory_id:['',[Validators.required]],
  //   image:[null]
  // })
}
ngOnInit(): void {
  this.getImage();
  this.isAddMode=!this.editImageId;

  this.imageForm=this.fb.group({
    image_id:[this.editImageId,{hidden:true}],
    image_title:['',[Validators.required]],
    description:['',[Validators.required]],
    category_id:['',[Validators.required]],
    subcategory_id:['',[Validators.required]],
    image:['',[Validators.required]],
    fileName:''
  })
}

  getImage(){
    this.editImageId=this.activeRoute.snapshot.params.id;
    if(this.editImageId!=undefined){
      this.imageService.getImageById(this.editImageId).subscribe((result:any)=>{
        console.log(result);

        this.imageForm.patchValue({
          image_id:result.data.image_id,
          image_title:result.data.image_title,
          description:result.data.description,
          category_id:result.data.category_id,
          subcategory_id:result.data.subcategory_id,
          fileName:result.data.fileName
        })
        this.userImage=this.url+this.imageForm.value.image;
      })
    }
  }
  processFile(ev){
    if(ev.target.files.length>0){
      this.selectedFile=<File>ev.target.files[0];
    this.imageForm.patchValue({
      fileName:<File>ev.target.files[0],
    })
  }
}


  saveImage(){
    const formData=new FormData();
    formData.append('image_title',this.imageForm.value.image_title);
    formData.append('description',this.imageForm.value.description);
    formData.append('category_id',this.imageForm.value.category_id);
    formData.append('subcategory_id',this.imageForm.value.subcategory_id);
    formData.append('file',this.selectedFile);



  this.editImageId=this.activeRoute.snapshot.params.id;
    if(!this.isAddMode){
      this.imageService.updateImage(this.imageForm.value).subscribe((result:any)=>{
        if(result.status==1){
          Swal.fire(result.message,'','success');
          this.router.navigate(['/root/dashboard/images/imageview']);
        }
        else{
          Swal.fire(result.message,'','error');
        }
      })
    }else{
      this.imageService.createImage(formData).subscribe((data:any)=>{
        console.log(data);
        if(data.status==1){
          Swal.fire(data.message,'','success');
          this.imageForm.reset();
          this.router.navigate(['/root/dashboard/images/imageview']);
        }
        else{
          Swal.fire(data.message,'','error');
        }
      })
    }
  }
}





