import { WalletService } from './services/wallet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Wallet } from 'src/app/Model/wallet';
import { SortEvent, WalletSortableHeaderDirective, compare } from './services/walletsortable-header.directive';
import { Observable } from 'rxjs';

@Component({
  templateUrl:'./wallet.component.html',
  styleUrls:['./wallet.component.css']
})
export class WalletComponent implements OnInit{
  wallet:Observable<Wallet[]>;

  walletTable:Wallet[]=[];
  walletDetails:any;
//   transaction_type:string[]=['credit','debit'];
  walletModel:Wallet;

  searchString:string;

  page:number=1;
  count:number=0;
  tableSize:number=7;
  tableSizes:any=[3,6,9,12];

  config={
    id:'custom',
    itemsPerPage:7,
    currentPage:1,
    totalItems:0
  }

  responsive:boolean=true;
  autoHide:boolean=true;
  directionLinks:boolean=true;
  maxSize:number=7;
  labels:any={
    previousLabel:'<---',
    nextLabel:'--->',
    screenReaderPaginationLabel:'Pagination',
    screenReaderPageLabel:'page',
    screenReaderCurrentLabel:`You're on page`
  };

data:Array<Wallet>=this.walletTable;
@ViewChildren(WalletSortableHeaderDirective) headers:QueryList<WalletSortableHeaderDirective>;

  constructor(public router:Router,private walletService:WalletService,public actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
   this.walletService.getWalletDetails().subscribe((data:any)=>{
      this.walletDetails=data;
      this.walletTable=this.walletDetails.data;
      console.log(this.walletTable);
   })
  }
  updateWallet(id:number){
    this.router.navigate(['/root/dashboard/wallet/edit-wallet/',id])
  }

  onTableDataChange(event:any){
    console.log(event);
    this.page=event;
    this.reloadData();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.reloadData();
  }

  onSort({column,direction}:SortEvent){
    this.walletService.getWalletDetails().subscribe((data:any)=>{
      this.walletTable=data;
      this.walletDetails=this.walletTable;

      this.headers.forEach((header)=>{
        if(header.sortable!==column){
          header.direction='';
        }
      });

      if(direction==='' || column===''){
        this.walletTable=this.data;
      }
      else{
        this.walletTable=[...this.data].sort((a,b)=>{
          const res=compare(a[column],b[column]);
          return direction==='asc' ? res : -res;
        });
      }
    })
  }


}
