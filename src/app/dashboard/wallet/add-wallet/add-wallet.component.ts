import { WalletService } from './../services/wallet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  isAddMode:boolean;
  transaction_type:any;


  get f(){ return this.walletForm.controls; }

  constructor(public router:Router,
              private fb:FormBuilder,
              private activeRoute:ActivatedRoute,
              private walletService:WalletService
      ){
        this.walletForm=this.fb.group({
          wallet_id:[this.editWalletId,{hidden:true}],
          credit:['',[Validators.required]],
          debit:['',[Validators.required]],
          balance:['',[Validators.required]],
          customer_id:['',[Validators.required]],
          plan_id:['',[Validators.required]],
          transaction_type:['',[]]
        })
      }

  ngOnInit(): void {
    this.getWallet();
    this.isAddMode=!this.editWalletId;
  }

  getWallet(){
    this.editWalletId=this.activeRoute.snapshot.params.id;

    if(this.editWalletId!=undefined){
      this.walletService.getWalletById(this.editWalletId).subscribe((wallet:any)=>{
        if(wallet.data.transaction_type==0){
          this.transaction_type='Credit'
        }
        else if(wallet.data.transaction_type==1){
          this.transaction_type='Debit'
        }
        else{
          this.transaction_type='';
        }

        this.walletForm.patchValue({
          credit:wallet.data.credit,
          debit:wallet.data.debit,
          balance:wallet.data.balance,
          transaction_type:this.transaction_type,
          plan_id:wallet.data.plan_id,
          customer_id:wallet.data.customer_id,
        })
      })
    }

  }

  saveWallet(){
    if(this.isAddMode){
      let updatedData=this.walletForm.value;
      console.log(updatedData)
      this.walletService.updateWallet(updatedData).subscribe((result:any)=>{
        if(result.status==1){
          Swal.fire(result.message,'','success');
          this.router.navigate(['/root/dashboard/wallet/walletview']);
        }
        else{
          Swal.fire(result.message,'','error');
        }
      })
    }
    else{
      let walletData=this.walletForm.value;
      this.walletService.createWallet(walletData).subscribe((result:any)=>{
        if(result.status==1){
          Swal.fire(result.message,'','success');
          this.router.navigate(['/root/dashboard/wallet/walletview']);
        }
        else{
          Swal.fire(result.message,'','error');
        }
      })
      this.walletForm.reset();
      this.router.navigate(['/root/dashboard/wallet/walletview']);
    }
  }
}
