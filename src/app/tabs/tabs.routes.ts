import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'mysf',
    component: TabsPage,
    children: [
      {
        path: ':entity',
        loadComponent: () =>
          import('../list/list.page').then((m) => m.ListPage),
      },
      {
        path: ':entity/:id',
        loadComponent: () =>
          import('../list/list.page').then((m) => m.ListPage),
      },
      {
        path: ':entity/usage',
        loadComponent: () =>
          import('../usage/usage.page').then((m) => m.UsagePage),
      },
      {
        path: ':entity/:id/usage',
        loadComponent: () =>
          import('../usage/usage.page').then((m) => m.UsagePage),
      },
      {
        path: '',
        redirectTo: '/databases/list',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: '',
  //   redirectTo: '/databases/list',
  //   pathMatch: 'full',
  // },
];
