import { Routes } from '@angular/router';

import { ChargeComponent } from './charge.component';

export const routes: Routes = [
  { path: '', component: ChargeComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ChargeRoutingModule { }

// export const routedComponents = [ChargeComponent];