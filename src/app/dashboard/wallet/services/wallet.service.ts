import { HttpClient } from '@angular/common/http';
import { Wallet } from './../../../Model/wallet';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class WalletService{
  private apiUrl="http://192.168.29.79/AddBrand";

  walletTable:Wallet[]=[];

  constructor(private http:HttpClient){
    this.walletTable.push(new Wallet(1,5000,0,5000,1,101,'credit'));
    this.walletTable.push(new Wallet(2,5000,0,10000,1,101,'credit'));
    this.walletTable.push(new Wallet(3,0,2000,8000,1,101,'debit'));
    this.walletTable.push(new Wallet(4,0,3000,5000,1,101,'debit'));
  }

  getWalletById(id:number){
    return this.walletTable.values[id];
  }

  createWallet(wallet:Wallet){
    return this.walletTable.push(wallet);
  }

  updateWallet(value:any){
    return this.http.put(`${this.apiUrl}`,value);
  }

    // deleteWallet(id:number)Observable<any>{
  //   return this.http.delete(`${this.apiUrl}/${id}`,{responseType:'text'});
  // }

  getWalletList(){
    return this.walletTable;
    // return this.http.get(`${this.apiUrl}`);
  }

}
