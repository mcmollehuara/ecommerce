import { Component, OnInit } from '@angular/core';
//
import { CartViewDisplay } from './../../shopping-cart/types';
//
import { CartService } from './../../shopping-cart/services/cart.service';
import { AppCartItem } from '../../app-cart-item';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    //Setup
    display: CartViewDisplay = 'responsive-table';
    tax = 0;
    shipping = 0;
    showImages = true;
    useCustom = false;

    //Constructor
    constructor(private cartService: CartService<AppCartItem>) { }


    ngOnInit() {
        this.tax = this.cartService.getTaxRate();
        this.shipping = this.cartService.getShipping();
    }

    //  Methods
    setTaxRate() {
        const val = parseFloat(this.tax.toString());
        this.cartService.setTaxRate(val);
        this.tax = this.cartService.getTaxRate();
    }

    setShipping() {
        const val = parseFloat(this.shipping.toString());
        this.cartService.setShipping(val);
        this.shipping = this.cartService.getShipping();
    }
}