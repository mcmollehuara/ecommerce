import { Component, ElementRef } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'home',
    providers: [],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    itinerary: any = [];
    constructor() { }
    ngOnInit(): void {

    }

    private onLoadItinerary(itinerary: any) {
        let that = this;
        that.itinerary = itinerary;
    }
}