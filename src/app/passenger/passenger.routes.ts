import { Routes } from '@angular/router';
import { PassengerComponent } from './passenger.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'pasajes', pathMatch: 'full' },
  {
    path: '', children: [
      {
        path: '', component: PassengerComponent, children: [
          { path: 'destino/:id', loadChildren: './destination/destination.module#DestinationModule' },
          { path: 'empresa', loadChildren: './company/company.module#CompanyModule' },
          { path: 'servicio', loadChildren: './service/service.module#ServiceModule' },
          { path: 'galeria', loadChildren: './gallery/gallery.module#GalleryModule' },
          { path: 'testimonio', loadChildren: './testimony/testimony.module#TestimonyModule' },
          { path: 'contacto', loadChildren: './contact/contact.module#ContactModule' },
        ]
      },

    ]
  }
];