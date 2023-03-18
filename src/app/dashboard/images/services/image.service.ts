import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images } from 'src/app/Model/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl="http://192.168.29.79/AddBrand";

  images:Images[]=[];

  constructor(private http:HttpClient) {
    this.images.push(new Images(1,'brand1','image1','description1',50,250,200,'imagecategory','imagesubcategory',new Date('2023-02-25')));
    this.images.push(new Images(2,'brand2','image2','description2',150,550,200,'imagecategory','imagesubcategory',new Date('2022-03-15')));
    this.images.push(new Images(3,'brand3','image3','description3',20,250,200,'imagecategory','imagesubcategory',new Date('2024-07-07')));
   }

   getImageById(id:number){
    return this.images.values[id];
   }

   createImage(image:Images){
    return this.images.push(image);
   }

   updateImage(id:number,value:any){

   }

   deleteImage(id:number){

   }

   getImageList(){
    return this.images;
   }

}
