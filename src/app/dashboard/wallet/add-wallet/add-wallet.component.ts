import { WalletService } from './../services/wallet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.css']
})
export class AddWalletComponent implements OnInit {

  walletForm!:FormGroup;
  submitted:boolean=false;
  editWalletId:number;
  walletId:string;

  get f(){ return this.walletForm.controls; }

  constructor(public router:Router,
              private fb:FormBuilder,
              private activeRoute:ActivatedRoute,
              private walletService:WalletService
      ){
        this.walletForm=this.fb.group({
          id:[{value:'',hidden:true}],
          credit:['',[Validators.required]],
          debit:['',[Validators.required]],
          balance:['',[Validators.required]],
          ttype:['',[Validators.required]]
        })
      }

  ngOnInit(): void {

  }

  getWallet(){
    this.editWalletId=this.activeRoute.snapshot.params.id;

    if(this.editWalletId!=undefined){
      this.walletService.getWalletById(this.editWalletId).subscribe((wallet:any)=>{
        this.walletForm.patchValue({
          credit:wallet.data.credit,
          debit:wallet.data.debit,
          balance:wallet.data.balance,
          transaction_type:wallet.data.transaction_type
        })
      })
    }

  }

  saveWallet(){
    if(this.walletId){
      let data=this.walletForm.value;
      console.log(data);
      this.walletService.updateWallet(data);
    }
    else{
      let walletData=this.walletForm.value;
      this.walletService.createWallet(walletData);
      this.walletForm.reset();
      this.router.navigate(['/root/dashboard/wallet/walletview']);
    }
  }


  getBalance(){

  }

}
