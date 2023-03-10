import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEFAULT_ROUTES } from './routes/default-layout-route';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './routes/admin-layout-route';

const routes: Routes = [
  {path:'',component:DefaultLayoutComponent,children:DEFAULT_ROUTES},
  {path:'root',component:AdminLayoutComponent,children:ADMIN_ROUTES},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
