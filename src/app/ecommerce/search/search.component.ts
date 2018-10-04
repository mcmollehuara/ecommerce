import { Component, OnInit, Type } from '@angular/core';
//
import { ActivatedRoute, Router } from '@angular/router';
//
import { SearchService } from "./services/search.service";
//
import { AppCartItem } from "./../../app-cart-item";

@Component({
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {
    //Setup CartItem
    //
    currentKey = 'cartItem';
    quantity = 1;
    custom = true;
    label = 'Agregar al Carrito';
    editor = 'button';
    position = 'left';
    //
    itemId: number;
    itemName: string;
    itemImages: Array<string>;
    itemQuantity: number;
    itemPrice: number;

    itemDescription: string;
    itemServiceName: string;
    itemDeparture: string;
    itemArrival: string;
    itemDepartureHour: string;
    itemPriceLevel1: number;
    itemPriceLevel2: number;
    //
    itinerary: any = [];
    _itinerary: any = [];
    arrivals: any = [];
    arrivalSelected: string = "";
    departures: any = [];
    departureSelected: string = "";
    serviceType: any = [];
    serviceTypeSelected: string = "";
    //
    pageItems: number[] = [20, 10, 5];
    _pageItems: number = 20;
    orderBy: string[] = ["Todos", "Destino", "Tipo Servicio"];
    //
    constructor(private searchService: SearchService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        let self = this;
        self.activatedRoute.params.subscribe(params => {

            if (params) {
                self.searchService.getItineraryList(params.departure, params.arrival, params.serviceType).then(resp => {
                    self.departureSelected = params.departure ? params.departure.toUpperCase() : "";
                    self.arrivalSelected = params.arrival ? params.arrival.toUpperCase() : "";
                    self.serviceTypeSelected = params.serviceType ? params.serviceType : "";

                    resp.data = resp.data.filter(item => {
                        //Case 1
                        if (self.departureSelected === item.departure && self.arrivalSelected === item.arrival && self.serviceTypeSelected === item.serviceName) {
                            return true;
                        }
                        //Case 2
                        if (self.departureSelected === item.departure && self.arrivalSelected === item.arrival && self.serviceTypeSelected === "") {
                            return true;
                        }
                        //Case 3
                        if (self.departureSelected === item.departure && self.arrivalSelected === "" && self.serviceTypeSelected === "") {
                            return true;
                        }

                        //Case 4
                        if (self.departureSelected === "" && self.arrivalSelected === "" && self.serviceTypeSelected === "") {
                            return true;
                        }
                    });
                    self.itinerary = resp.data;
                    self._itinerary = resp.data;
                });
            }
        });
    }

    ngOnInit() {
        let self = this;
        self.searchService.getArrivals().then(resp => {
            self.arrivals = resp.data;
        });

        self.searchService.getDepartures().then(resp => {
            self.departures = resp.data;
        });

        self.searchService.getServiceType().then(resp => {
            self.serviceType = resp.data;
        });
    }

    public onDepartureFilter() {
        let self = this;
        self.router.navigate(["app/ecommerce/busqueda", self.departureSelected]);
    }

    public onArrivalFilter(name) {
        let self = this;
        self.router.navigate(["app/ecommerce/busqueda", self.departureSelected, self.arrivalSelected]);
    }


    onServiceFilter(name) {
        let self = this;
        self.router.navigate(["app/ecommerce/busqueda", self.departureSelected, self.arrivalSelected, self.serviceTypeSelected]);
    }

    onPageItemsFilter(item) {
        let self = this;
        self._pageItems = item;
    }

    onResetFilters() {
        let self = this;
        self.router.navigate(["app/ecommerce/busqueda"]);
        self._pageItems = 20;
    }

    getAppCartItem(item: any): AppCartItem {
        
        let _cartItem = new AppCartItem({
            identifier: Date.now(),
            itemId: item.id,
            label: `${item.departure}-${item.arrival}`,
            cost: item.priceLivel1,
            amount: 1,
            country: 'PE',
            description: `Pasaje ida de ${item.departure} a ${item.arrival}. 
            La hora de salida es ${item.departureHour}.`,
            photo: 'assets-trans/img/blog/28e.jpg'
        });
        return _cartItem;
    }

    addToCart(item) {
        console.log('added', item);
        // console.log('cart items', this.cartService.getItems());
    }
}


