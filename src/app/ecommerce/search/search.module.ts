import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { SearchService  } from "./services/search.service";
import { routes } from "./search.routes";
import { RouterModule } from "@angular/router";
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "./search.pipe";
import { ShoppingCartModule } from './../../shopping-cart/shopping-cart.module';

@NgModule({
    imports: [CommonModule,FormsModule, RouterModule.forChild(routes), ShoppingCartModule.forChild()],
    exports: [],
    declarations: [SearchComponent, SearchPipe],
    providers: [SearchService],
})
export class SearchModule { 
    public static routes = routes;
}
