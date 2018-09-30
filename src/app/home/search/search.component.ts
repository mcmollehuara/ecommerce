import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeService } from "./../services/home.service";

@Component({
    selector: 'search',
    providers: [],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    itinerary: any = [];
    departures: any = [];
    arrivals: any = [];
    departure: String;
    arrival: String;

    @Output() onSearchItinerary = new EventEmitter(true);

    departureSelected: string = "";
    arrivalSelected: string = "";

    constructor(
        private homeService: HomeService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        let self = this;
        self.homeService.getDepartures().then(resp => {
            self.departures = resp.data;
            self.arrivals = resp.data;
        });
    }

    onSearch() {
        let self = this;
        self.router.navigate(["app/ecommerce/busqueda", self.departureSelected, self.arrivalSelected]);
    }
}