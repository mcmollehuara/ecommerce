import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceComponent } from './service.component';

 export const routes: Routes = [
  { path: '', component: ServiceComponent },
];

// export const ServiceRoutes = RouterModule.forChild(routes);
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ServiceRoutingModule { }

// export const routedComponents = [ServiceComponent];