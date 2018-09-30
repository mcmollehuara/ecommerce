import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination.component';

const routes: Routes = [
  { path: '', component: DestinationComponent , pathMatch: 'full' },
];


export  const DestinationRoutes = RouterModule.forChild(routes);  