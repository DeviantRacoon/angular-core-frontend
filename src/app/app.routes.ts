import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@layout/layout.module').then(m => m.LayoutModule),
        canActivate: [authGuard],
        // redirectTo: 'web',
    },

    {
        path: 'web',
        loadChildren: () => import('@modules/web/web.module').then(m => m.WebModule)
    },

];
