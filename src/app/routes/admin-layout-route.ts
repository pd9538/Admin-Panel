import { Routes } from '@angular/router';

export const ADMIN_ROUTES : Routes = [
    {
        path : "dashboard",
        loadChildren : () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];
