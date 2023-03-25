export class Plan{
  plan_id:number;
  plan_name:string;
  plan_type:string;
  validity_days:number;
  charges:number;
  gst:number;
  description?:string;
  discount:string;
  first_time_applicable:number;
 status:string;

  constructor(plan_id:number,plan_name:string,plan_type:string,validity_days:number,charges:number,gst:number,discount:string,first_time_applicable:number,status:string){
    this.plan_id=plan_id;
    this.plan_name=plan_name;
    this.plan_type=plan_type;
    this.validity_days=validity_days;
    this.charges=charges;
    this.gst=gst;
    this.discount=discount;
    this.first_time_applicable=first_time_applicable;
    this.status=status;
  }
}

