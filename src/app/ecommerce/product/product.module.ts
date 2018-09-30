import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductService  } from "./services/product.service";
import { routes } from "./product.routes";
//
import { FormsModule } from '@angular/forms';
//
import { ShoppingCartModule } from './../../shopping-cart/shopping-cart.module';
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ShoppingCartModule.forChild(), FormsModule],
    exports: [],
    declarations: [ProductComponent],
    providers: [ProductService],
})
export class ProductModule {
    public static routes = routes;
 }
