import { Component, ElementRef , OnInit} from '@angular/core';

declare var jQuery: any;
declare var $: any;


@Component({
    selector: 'hero-banner',
    providers: [],
    templateUrl: './heroBanner.component.html'
})
export class HeroBannerComponent implements OnInit  {
    $el: any;
    constructor(el: ElementRef) { 
        this.$el = jQuery(el.nativeElement);
    }
    ngOnInit(): void {
      
    }
    ngAfterViewInit(){
       
    }
}

// interface JQuery {
//     layerslider(options?: any): JQuery;
// }