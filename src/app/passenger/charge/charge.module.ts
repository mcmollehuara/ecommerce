import { NgModule } from '@angular/core';

import { ChargeComponent } from './charge.component';
import { ChargeService  } from "./services/charge.service";
import { routes } from "./charge.routes";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [ChargeComponent],
    providers: [ChargeService],
})
export class ChargeModule { 
    public static routes = routes;
}
