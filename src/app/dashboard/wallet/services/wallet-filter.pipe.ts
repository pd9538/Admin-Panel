import { Pipe, PipeTransform } from '@angular/core';
import { Plan } from 'src/app/Model/plan';

@Pipe({
  name: 'walletFilter'
})
export class WalletFilterPipe implements PipeTransform {


  transform(value: any[], searchString:string): any[] {


    if(!value){
    return [];
    }

    if(!searchString){
      return value;
    }

    searchString=searchString.toLowerCase();

    return value.filter(wallet=>{
      console.log(wallet)



      return wallet.wallet_id.includes(searchString) ||
      wallet.credit.includes(searchString) ||
      wallet.debit.includes(searchString) ||
      wallet.balance.includes(searchString) ||
      wallet.plan_id.includes(searchString) ||
      wallet.customer_id.includes(searchString) ||
      wallet.transaction_type.includes(searchString)
    })

  }

}
