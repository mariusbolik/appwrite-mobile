import { Route, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'databases',
    component: TabsPage,
    children: [
      {
        title: 'Databases',
        data: {
          icon: 'server'
        },
        path: 'list',
        loadComponent: () =>
          import('../list/list.page').then((m) => m.ListPage),
      },
      {
        title: 'Usage',
        data: {
          icon: 'analytics'
        },
        path: 'usage',
        loadComponent: () =>
          import('../usage/usage.page').then((m) => m.UsagePage),
      },
    ],
  },
  {
    path: 'collections',
    component: TabsPage,
    children: [
      {
        title: 'Collections',
        data: {
          icon: 'server'
        },
        path: 'list',
        loadComponent: () =>
          import('../list/list.page').then((m) => m.ListPage),
      },
      {
        title: 'Usage',
        data: {
          icon: 'analytics'
        },
        path: 'usage',
        loadComponent: () =>
          import('../usage/usage.page').then((m) => m.UsagePage),
      },
      {
        title: 'Settings',
        data: {
          icon: 'cog'
        },
        path: 'settings',
        loadComponent: () =>
          import('../usage/usage.page').then((m) => m.UsagePage),
      },
    ],
  },
  // {
  //   path: 'databases/:database_id/collections/:collection_id',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'list',
  //       loadComponent: () =>
  //         import('../list/list.page').then((m) => m.ListPage),
  //     },
  //     {
  //       path: 'attributes',
  //       loadComponent: () =>
  //         import('../usage/usage.page').then((m) => m.UsagePage),
  //     },
  //     {
  //       path: 'indexes',
  //       loadComponent: () =>
  //         import('../usage/usage.page').then((m) => m.UsagePage),
  //     },
  //     {
  //       path: 'activity',
  //       loadComponent: () =>
  //         import('../usage/usage.page').then((m) => m.UsagePage),
  //     },
  //     {
  //       path: 'usage',
  //       loadComponent: () =>
  //         import('../usage/usage.page').then((m) => m.UsagePage),
  //     },
  //     {
  //       path: 'settings',
  //       loadComponent: () =>
  //         import('../usage/usage.page').then((m) => m.UsagePage),
  //     },
  //   ],
  // },
  {
    path: '',
    redirectTo: 'databases/list',
    pathMatch: 'full',
  },
];
