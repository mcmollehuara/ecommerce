import { Component, OnInit } from '@angular/core';
import { ProductService } from "./services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
//
import { CartService } from './../../shopping-cart/services/cart.service';
import { AppCartItem } from "./../../app-cart-item";
import { CartItem } from '../../shopping-cart';

@Component({
    selector: 'product',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {
    //Setup CartItem
    //
    cartItem: AppCartItem;
    currentKey = 'cartItem';
    // quantity = 1;
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
    //Product
    // 
    product: any = {};
    //Constructor initializacion
    //
    constructor(private productService: ProductService,
        private activatedRoute: ActivatedRoute, private router: Router,
        private cartService: CartService<AppCartItem>) {
        let self = this;
        self.activatedRoute.params.subscribe(params => {
            if (params) {
                self.productService.getItinerary(params.id).then(resp => {
                    if (resp.data && resp.data.length > 0) {
                        self.product = resp.data.find(function (item) {
                            return (item.id == params.id);
                        });
                        if (self.product) {
                            //Component properties
                            self.itemId = self.product.id;
                            self.itemName = `${self.product.departure}-${self.product.arrival}`;
                            // self.itemImages 
                            self.itemQuantity = 1;
                            self.itemPrice = self.product.priceLivel1;
                            self.itemDescription = `Pasaje ida de ${self.product.departure} a ${self.product.arrival}. 
                            La hora de salida es ${self.product.departureHour}.`;
                            self.itemServiceName = self.product.serviceName;
                            self.itemDeparture = self.product.departure;
                            self.itemArrival = self.product.arrival;
                            self.itemDepartureHour = self.product.departureHour;
                            self.itemPriceLevel1 = self.product.priceLivel1;
                            self.itemPriceLevel2 = self.product.priceLivel2;
                            self.itemImages = ['assets-trans/img/blog/28e.jpg',
                                'assets-trans/img/blog/28-thumbe.jpg',
                                'assets-trans/img/blog/29-thumbe.jpg',
                                'assets-trans/img/blog/30-thumbe.jpg']
                            //Adding the card item
                            this.cartItem = new AppCartItem({
                                identifier: Date.now(),
                                itemId: self.product.id,
                                label: self.itemName,
                                cost: self.itemPrice,
                                amount: self.itemQuantity,
                                country:'PE',
                                description:self.itemDescription,
                                photo: self.itemImages[0]
                            });
                        }
                    }
                });
            }
        });

    }

    ngOnInit() {

    }
    //
    onSearchArrival(arrival) {
        let that = this;
        that.router.navigate(["app/ecommerce/busqueda", arrival]);
    }


    addToCart(item) {
        console.log('added', item);
        // console.log('cart items', this.cartService.getItems());
    }

    quantityChanged(value) {
        console.log('editor changed', value);
        let self = this;
        self.itemQuantity = self.itemQuantity + value;
        self.cartItem.setQuantity(self.itemQuantity)
    }

    levelChanging(value) {
        console.log('level changed', value);
        let self = this
        switch (value) {
            case 1:
            self.itemPrice = self.itemPriceLevel1;
                break;
            case 2:
            self.itemPrice = self.itemPriceLevel2;
                break;
            default:
            self.itemPrice = self.itemPriceLevel1;
                break;
        }
        self.cartItem.setPrice(self.itemPrice);
    }
}