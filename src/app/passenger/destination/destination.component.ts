import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'destination',
    templateUrl: 'destination.component.html'
})

export class DestinationComponent implements OnInit {
    title: string = ''; F
    constructor(private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(params => {            
            let that = this;
            if (params) {
                that.title = params.id;
            }            
        });

    }

    ngOnInit() { }
}