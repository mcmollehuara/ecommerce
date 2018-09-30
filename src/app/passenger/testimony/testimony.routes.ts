import { Routes } from '@angular/router';

import { TestimonyComponent } from './testimony.component';

export const routes: Routes = [
  { path: '', component: TestimonyComponent },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class TestimonyRoutingModule { }

// export const routedComponents = [TestimonyComponent];