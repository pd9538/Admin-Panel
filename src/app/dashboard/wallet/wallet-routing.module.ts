import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { WalletComponent } from './wallet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'walletview',component:WalletComponent,canActivate:[AuthGuard]},
  {path:'add-wallet',component:AddWalletComponent,canActivate:[AuthGuard]},
  {path:'edit-wallet/:id',component:AddWalletComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
