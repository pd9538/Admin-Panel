export class Wallet{
  id:number;
  credit:number;
  debit:number;
  balance:number;
  plan_id:number;
  customer_id:number;
  transaction_type:string;

  constructor(id:number,credit:number,debit:number,balance:number,plan_id:number,customer_id:number,transaction_type:string){
    this.id=id;
    this.credit=credit;
    this.debit=debit;
    this.balance=balance;
    this.plan_id=plan_id;
    this.customer_id=customer_id;
    this.transaction_type=transaction_type;
  }
}

