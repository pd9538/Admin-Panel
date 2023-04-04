export class Images{
  id:number;
  image_title:string
  description:string;
  category_id:number;
  subcategory_id:number;
  image:File

  constructor(id:number,image_title:string,description:string,category_id:number,subcategory_id:number,image:File){
    this.id=id;
    this.image_title=image_title;
    this.description=description;
    this.category_id=category_id;
    this.subcategory_id=subcategory_id;
    this.image=image;
  }
}

