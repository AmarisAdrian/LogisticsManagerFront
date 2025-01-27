import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
         path: 'inicio',
        loadChildren: () =>
          import('./modules/inicio/inicio-routing.module').then((m) => m.routes),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/clientes/clientes-routing.module').then((m) => m.ClientesRoutingModule),
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./modules/productos/productos-routing.module').then((m) => m.ProductosRoutingModule),
      },
      {
        path: 'logistica-maritima',
        loadChildren: () =>
          import('./modules/logistica-maritima/logistica-maritima-routing.module').then((m) => m.LogisticaMaritimaRoutingModule),
      },
      {
       path: 'logistica-terrestre',
        loadChildren: () =>
        import('./modules/logistica-terrestre/logistica-terrestre-routing.module').then((m) => m.LogisticaTerrestreRoutingModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
