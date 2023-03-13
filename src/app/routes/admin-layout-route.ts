import { Routes } from '@angular/router';

export const ADMIN_ROUTES : Routes = [
    {
        path : "dashboard",
        loadChildren : () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path:"myaccount",
      loadChildren:()=>import('../myaccount/myaccount.module').then(m=>m.MyaccountModule)
    }
];
