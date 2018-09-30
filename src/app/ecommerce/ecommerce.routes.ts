import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'comercio', pathMatch: 'full' },
  {
    path: '', children: [
      {
        path: '', component: EcommerceComponent, children: [
          { path: '', redirectTo: 'inicio', pathMatch: 'full' },
          { path: 'inicio', loadChildren: './search/search.module#SearchModule' },
          { path: 'busqueda', loadChildren: './search/search.module#SearchModule' },
          { path: 'busqueda/:departure', loadChildren: './search/search.module#SearchModule' },
          { path: 'busqueda/:departure/:arrival', loadChildren: './search/search.module#SearchModule' },
          { path: 'busqueda/:departure/:arrival/:serviceType', loadChildren: './search/search.module#SearchModule' },
          { path: 'carrito', loadChildren: './cart/cart.module#CartModule' },
          { path: 'producto/:id', loadChildren: './product/product.module#ProductModule' }         
        ]
      },

    ]
  }
];