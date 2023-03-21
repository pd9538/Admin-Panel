import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './wallet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { AddWalletComponent } from './add-wallet/add-wallet.component';


@NgModule({
  declarations: [
    WalletComponent,
    AddWalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WalletModule { }
