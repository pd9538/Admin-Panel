import { Pipe, PipeTransform } from '@angular/core';
import { Plan } from 'src/app/Model/plan';

@Pipe({
  name: 'planFilter'
})
export class PlanFilterPipe implements PipeTransform {
  plan_type:String;
  status:String;

  transform(value: any[], searchString:string): any[] {


    if(!value){
    return [];
    }

    if(!searchString){
      return value;
    }

    searchString=searchString.toLowerCase();

    return value.filter(plan=>{
      console.log(plan)
      if(plan.status==1){
        this.status="Active"
      }
      else{
        this.status="Inactive"
      }
      console.log(this.status)
      if(plan.plan_type==1){
        this.plan_type="Gold"
      }
      else if(plan.plan_type==2){
        this.plan_type="Silver"
      }
      else{
        this.plan_type="Platinum"
      }


      return plan.plan_id.includes(searchString) ||
      plan.plan_name.toLowerCase().includes(searchString) ||
      this.plan_type.toLowerCase().includes(searchString) ||
      plan.validity_days.includes(searchString) ||
      plan.charges.includes(searchString) ||
      plan.gst.includes(searchString) ||
      plan.discount.includes(searchString) ||
      this.status.toLowerCase().includes(searchString)
    })

  }

}
