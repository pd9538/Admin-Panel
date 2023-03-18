export class Images{
  id:number;
  title:string
  name:string;
  description:string;
  download_count:number;
  view_count:number;
  like_count:number;
  category:string;
  subcategory:string;
  date:Date;

  constructor(id:number,title:string,name:string,description:string,download_count:number,
    view_count:number,like_count:number,category:string,subcategory:string,date:Date){
    this.id=id;
    this.title=title;
    this.name=name;
    this.description=description;
    this.download_count=download_count;
    this.view_count=view_count;
    this.like_count=like_count;
    this.category=category;
    this.subcategory=subcategory;
    this.date=date;
  }
}

