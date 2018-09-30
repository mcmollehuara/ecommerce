import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
//
import { ShoppingCartModule } from './../shopping-cart/shopping-cart.module';
import { AppCartItem } from './../app-cart-item';
// import { AppShowcaseItemComponent } from './../app-showcase-item-component/app-showcase-item.component';
//
import { routes } from "./ecommerce.routes";
//
import { EcommerceService } from "./ecommerce.service";
//
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [EcommerceComponent],
    providers: [EcommerceService]
})
export class EcommerceModule {
    public static routes = routes;
}
