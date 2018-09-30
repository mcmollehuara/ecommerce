import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { LayoutComponent } from './layout.component';
//
export const routes: Routes = [
  { path: 'layout', component: LayoutComponent }
];
//
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class LayoutRoutingModule { }

// export const routedComponents = [LayoutComponent];  