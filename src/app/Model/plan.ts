export class Plan{
  id:number;
  name:string;
  type:string;
  validity:number;
  charges:number;
  gst:number;
  description?:string;

  constructor(id:number,name:string,type:string,validity:number,charges:number,gst:number){
    this.id=id;
    this.name=name;
    this.type=type;
    this.validity=validity;
    this.charges=charges;
    this.gst=gst;

  }
}

