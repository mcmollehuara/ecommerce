import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from "./../services/home.service";
@Component({
    selector: 'products',
    providers: [],
    templateUrl: 'products.component.html'
})
export class ProductsComponent {
    itinerary: any = [];
    constructor(
        private homeService: HomeService,
        private router: Router
    ) { }
    ngOnInit(): void {

    }

    ngOnChanges() {

    }

    onSearchArrival(arrival) {
        let that = this;
        that.router.navigate(["app/ecommerce/busqueda", arrival]);        
    }
}