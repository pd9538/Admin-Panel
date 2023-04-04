import { Pipe, PipeTransform } from '@angular/core';
import { Images } from 'src/app/Model/images';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(value: any[], searchString:string): any[] {


    if(!value){
    return [];
    }

    if(!searchString){
      return value;
    }

    searchString=searchString.toLowerCase();

    return value.filter(image=>{


      return image.image_id.includes(searchString) ||
      image.image_title.toLowerCase().includes(searchString) ||
      image.description.toLowerCase().includes(searchString) ||
      image.category_id.includes(searchString) ||
      image.subcategory_id.includes(searchString)
    })

  }

}
