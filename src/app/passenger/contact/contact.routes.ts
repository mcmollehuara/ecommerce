import { Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: ContactComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ContactRoutingModule { }

// export const routedComponents = [ContactComponent];