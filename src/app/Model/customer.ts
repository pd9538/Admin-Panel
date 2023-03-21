export class Customer{
  id:number;
  type:string;
  name:string;
  address:string;
  district:string;
  state:number;
  pin:number;
  mobile:string;
  email:string;
  status:boolean;
  plan:string;
  referid:number;
  balance:number;

  constructor(id:number,type:string,name:string,address:string,district:string,
    state:number,pin:number,mobile:string,email:string,status:boolean){
    this.id=id;
    this.type=type;
    this.name=name;
    this.address=address;
    this.district=district;
    this.state=state;
    this.pin=pin;
    this.mobile=mobile;
    this.email=email;
    this.status=status;
  }
}

