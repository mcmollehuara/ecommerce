import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from "./../services/home.service";
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'destinations',
    providers: [],
    templateUrl: './destinations.component.html'
})
export class DestinationsComponent {
    itinerary: any = [];
    constructor(private homeService: HomeService) {

    }
    ngOnInit(): void {

    }

    ngOnChanges(): void {

    }
}