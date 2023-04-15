import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './wallet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { WalletFilterPipe } from './services/wallet-filter.pipe';
import { WalletSortableHeaderDirective } from './services/walletsortable-header.directive';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    WalletComponent,
    AddWalletComponent,
    WalletFilterPipe,
    WalletSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class WalletModule { }
