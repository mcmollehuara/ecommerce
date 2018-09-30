import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CartComponent } from './cart.component';
import { CartService } from "./services/cart.service";
import { FormsModule } from '@angular/forms';
import { routes } from "./cart.routes";
//
import { ShoppingCartModule } from './../../shopping-cart/shopping-cart.module';
@NgModule({
    imports: [RouterModule.forChild(routes), ShoppingCartModule.forChild(), FormsModule],
    exports: [],
    declarations: [CartComponent],
    providers: [CartService],
})


export class CartModule { }
