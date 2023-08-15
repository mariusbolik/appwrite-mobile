import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'mysf/collections/main',
    loadComponent: () =>
    import('./tabs/tabs.page').then((m) => m.TabsPage),
  },
  // {
  //   path: ':a/:b/list',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
];
