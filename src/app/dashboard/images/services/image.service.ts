import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images } from 'src/app/Model/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl="http://192.168.29.79/AddBrand";

  images:Images[]=[];

  constructor(private http:HttpClient) {}

   getImageById(image_id:number):Observable<Images>{
    return this.http.post<Images>(this.apiUrl+'/editimage-id',{"image_id":image_id});
  }
   createImage(image){
    return this.http.post(this.apiUrl+'/addimage',image);

   }
   updateImage(value:any):Observable<Images>{
    return this.http.post<Images>(this.apiUrl+'/editimage',value)
   }

   deleteImage(id:number){
    return this.http.post<Images>(this.apiUrl+'/deleteimage',{"image_id":id});
   }

   getImageList(){
    return this.http.get(this.apiUrl+'/image-details');
   }


}
