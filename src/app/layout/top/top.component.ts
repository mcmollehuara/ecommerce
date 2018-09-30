import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'top',
    templateUrl: './top.html'
})
export class TopComponent {
    icon = '';
    noItemsText = 'Ningun item';
    oneItemText = 'Un item';
    manyItemsText = '# items';
    constructor() {
    }
    ngOnInit(): void {


    }

}