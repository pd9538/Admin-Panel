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

  form2:FormGroup;
  categoryId:any;
  url:URL;
  category:any;
  categoryList:any=[];
  subcategory:any;
  subcategoryList:any=[];
  subcategories=[];
  selectedCategoryId:number;
  filteredSubCategories:any[]=[];
  fileselected:boolean;


  selectedFile:File;
  private apiUrl="http://192.168.29.79/AddBrand";
  fd=new FormData();
  file:Blob;
  fileName:any;
  get f(){ return this.imageForm.controls; }

  constructor(public router:Router,
    private activeRoute:ActivatedRoute,
    private imageService:ImageService,
    private fb:FormBuilder,
    public http:HttpClient
){
  this.editImageId=this.activeRoute.snapshot.params.id;
  this.imageForm=this.fb.group({
    image_id:[this.editImageId,{hidden:true}],
    image_title:['',[Validators.required]],
    description:['',[Validators.required]],
    category_id:['',[]],
    subcategory_id:['',[]],
    image:['',[]],
    fileName:''
  })
}

ngOnInit(): void {
  this.getImage();
  this.imageService.getCategory().subscribe((result:any)=>{
    this.category=result;
    this.categoryList=this.category.data;
  });
  this.isAddMode=!this.editImageId;
}



  getImage(){
    this.editImageId=this.activeRoute.snapshot.params.id;
    if(this.editImageId!=undefined){
      this.imageService.getImageById(this.editImageId).subscribe((result:any)=>{
        this.fileselected=true;
        this.fileName=result.data.image;

        if(result.data.category_id){
          this.selectedCategoryId=result.data.category_id;
          this.selectsubCategory();
        }

        this.imageForm.patchValue({
          image_id:result.data.image_id,
          image_title:result.data.image_title,
          description:result.data.description,
          category_id:result.data.category_id,
          subcategory_id:result.data.subcategory_id
        })
      })
    }
  }

  processFile(ev){
    if(ev.target.files.length>0){
      this.selectedFile=<File>ev.target.files[0];
      this.fileselected=false;
    this.imageForm.patchValue({
      fileName:<File>ev.target.files[0]
    })
  }
}


  saveImage(){
    console.log(this.imageForm.value);
    let formData=new FormData();

    formData.append('image_id',this.imageForm.value.image_id);
    formData.append('image_title',this.imageForm.value.image_title);
    formData.append('description',this.imageForm.value.description);
    formData.append('category_id',this.imageForm.value.category_id);
    formData.append('subcategory_id',this.imageForm.value.subcategory_id);
    formData.append('file',this.selectedFile);

      this.editImageId=this.activeRoute.snapshot.params.id;

    if(!this.isAddMode){
      this.imageService.updateImage(formData).subscribe((result:any)=>{
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
        // console.log(data);
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


  selectsubCategory(){
    this.imageService.getSubCategoy(this.selectedCategoryId).subscribe((result:any)=>{
      this.subcategory=result;
      this.subcategoryList=this.subcategory.data;
    })
  }

  filterCategory(event:any){
    this.selectedCategoryId=event.target.value;
      if(event.target.value){
        this.selectsubCategory();
      }
  }
}





