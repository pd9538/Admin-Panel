import { ImageService } from './services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { Images } from "src/app/Model/images";

@Component({
  templateUrl:'./images.component.html',
  styleUrls:['./images.component.css']
})
export class ImagesComponent implements OnInit{

    images:Images[]=[];
    imagesModel:Images;

    constructor(public router:Router,private actRouter:ActivatedRoute,private imageService:ImageService){}


      ngOnInit(){
        this.reloadData();
      }

      reloadData(){
        console.log(this.imageService.getImageList());
        this.images=this.imageService.getImageList();
      }

      updateImages(id:number){

      }


  delete=(id:number)=>{

  }
}
