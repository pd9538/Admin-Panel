export class Customer{
  customer_id:number;
  customer_type:string;
  name:string;
  address:string;
  district:string;
  state:number;
  pincode:number;
  mobile:string;
  email:string;
  status:string;
  plan:string;
  referid:number;
  balance:number;
  plan_id:number;
  refered_by:number;
  wallet_balance:number;

  constructor(customer_id:number,customer_type:string,name:string,address:string,district:string,
    state:number,pincode:number,mobile:string,email:string,status:string,plan_id:number,refered_by:number,
    wallet_balance:number){
    this.customer_id=customer_id;
    this.customer_type=customer_type;
    this.name=name;
    this.address=address;
    this.district=district;
    this.state=state;
    this.pincode=pincode;
    this.mobile=mobile;
    this.email=email;
    this.status=status;
    this.plan_id=plan_id;
    this.refered_by=refered_by;
    this.wallet_balance=wallet_balance;
  }
}

