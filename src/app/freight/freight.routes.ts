import { Routes } from '@angular/router';
import { FreightComponent } from './freight.component';

export const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: FreightComponent, children: [
          { path: '', redirectTo: 'inicio', pathMatch: 'full' },
          { path: 'inicio', loadChildren: './charge/charge.module#ChargeModule' },
          { path: 'busqueda', loadChildren: './charge/charge.module#ChargeModule' }
        ]
      },

    ]
  }
];