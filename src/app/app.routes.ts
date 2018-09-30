import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { ErrorComponent } from './error/error.component';
import { NoContentComponent } from './no-content/no-content.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app', component: LayoutComponent ,children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', loadChildren: './home/home.module#HomeModule' },
      { path: 'pasajero', loadChildren: './passenger/passenger.module#PassengerModule' },
      { path: 'carga', loadChildren: './freight/freight.module#FreightModule' },
      { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
      { path: 'login', loadChildren: './login/login.module' },
    ]
  },

  { path: 'error', component: ErrorComponent },
  { path: '**', component: NoContentComponent }
];
