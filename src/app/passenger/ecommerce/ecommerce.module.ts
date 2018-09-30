import { NgModule } from '@angular/core';

import { EcommerceComponent } from './ecommerce.component';
import { EcommerceService  } from "./services/ecommerce.service";
import {  EcommerceRoutingModule} from "./ecommerce.routes";
@NgModule({
    imports: [EcommerceRoutingModule],
    exports: [],
    declarations: [EcommerceComponent],
    providers: [EcommerceService],
})
export class EcommerceModule { }
