import { WalletService } from './services/wallet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Model/wallet';

@Component({
  templateUrl:'./wallet.component.html',
  styleUrls:['./wallet.component.css']
})
export class WalletComponent implements OnInit{
  wallet:Observable<Wallet[]>;

  walletTable:Wallet[]=[];
  transaction_type:string[]=['credit','debit'];
  walletModel:Wallet;

  constructor(public router:Router,private walletService:WalletService,public actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
   this.walletTable=this.walletService.getWalletList();
  }
  updateWallet(){

  }

  deleteWallet(){

  }

}
