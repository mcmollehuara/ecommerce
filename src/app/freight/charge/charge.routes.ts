import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeComponent } from './charge.component';

export const routes: Routes = [
  { path: '', component: ChargeComponent, pathMatch: 'full' },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ChargeRoutingModule { }