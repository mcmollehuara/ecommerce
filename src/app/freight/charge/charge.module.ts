
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeComponent } from "./charge.component";


import { ChargeService } from './services/charge.service';
import { RouterModule } from '@angular/router';
import { routes } from './charge.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [ChargeComponent],
    providers: [ChargeService],
})
export class ChargeModule {
    public static routes = routes;
}
