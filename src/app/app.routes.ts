import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then( m => m.GraphPage)
  },
  {
    path: 'lab3',
    loadComponent: () => import('./lab3/lab3.page').then( m => m.Lab3Page)
  },
  {
    path: 'lab4',
    loadComponent: () => import('./lab4/lab4.page').then( m => m.Lab4Page)
  },
  {
    path: 'lab6',
    loadComponent: () => import('./lab6/lab6.page').then( m => m.Lab6Page)
  },
  {
    path: 'interfacepage',
    loadComponent: () => import('./interfacepage/interfacepage.page').then( m => m.InterfacepagePage)
  },
  {
    path: 'servicepage',
    loadComponent: () => import('./servicepage/servicepage.page').then( m => m.ServicepagePage)
  },
];
