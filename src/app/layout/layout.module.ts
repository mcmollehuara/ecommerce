import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//
import { LayoutComponent } from "./layout.component";
import { BottomComponent } from './bottom/bottom.component';
import { TopComponent } from './top/top.component';
import { NavbarComponent } from './navbar/navbar.component';
//
import { LayoutService } from "./services/layout.service";
//
import { routes } from "./layout.router";
//
import { ShoppingCartModule } from './../shopping-cart/shopping-cart.module';

@NgModule({
    imports: [RouterModule.forChild(routes), ShoppingCartModule.forChild()],
    exports: [],
    declarations: [LayoutComponent, NavbarComponent, TopComponent, BottomComponent,],
    providers: [LayoutService],
})
export class LayoutModule {
    public static routes = routes;
}
