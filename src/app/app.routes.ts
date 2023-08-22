import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: ':a/:b/list',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
];
