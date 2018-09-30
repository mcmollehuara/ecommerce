
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserModule }  from '@angular/platform-browser';

// import { BottomComponent } from '../layout/bottom/bottom.component';
// import { TopComponent } from '../layout/top/top.component';
// import { NavbarComponent } from '../layout/navbar/navbar.component';

import { HomeService } from './services/home.service';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

import { HeroBannerComponent } from "./hero-banner/heroBanner.component";
import { SearchComponent } from "./search/search.component";
import { DestinationsComponent } from "./destinations/destinations.component";
import { ProductsComponent } from "./products/products.component";
import { HomeChargeComponent } from "./charge/home-charge.component";
import { HomeCompanyComponent } from "./home-company/home-company.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { GalleryComponent } from "./gallery/gallery.component";

import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [HomeComponent, HeroBannerComponent, SearchComponent, DestinationsComponent, ProductsComponent, HomeChargeComponent, HomeCompanyComponent, OurServicesComponent, GalleryComponent],
    providers: [HomeService],
})
export class HomeModule {
    public static routes = routes;
}
