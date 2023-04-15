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
  }

  getWalletDetails(){
    return this.http.get(this.apiUrl+'/wallets')
  }

  getWalletById(id:number){
    return this.http.post(this.apiUrl+'/editWallet-id',{wallet_id:id});
  }

  createWallet(wallet:Wallet){
   return this.http.post(this.apiUrl+'/addWallet',wallet);
  }

  updateWallet(value:any){
    return this.http.put(this.apiUrl+'/editWallet',value);
  }

    // deleteWallet(id:number)Observable<any>{
  //   return this.http.delete(`${this.apiUrl}/${id}`,{responseType:'text'});
  // }

  getWalletList(){
    return this.walletTable;
    // return this.http.get(`${this.apiUrl}`);
  }

}
