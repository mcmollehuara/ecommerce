import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FreightComponent } from './freight.component';
//
// import { BottomComponent } from '../layout/bottom/bottom.component';
// import { TopComponent } from '../layout/top/top.component';
// import { NavbarComponent } from '../layout/navbar/navbar.component';
//
import { routes } from "./freight.routes";
//
import { FreightService } from "./freight.service";
//
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [FreightComponent],
    providers: [FreightService],
})
export  class FreightModule { 
    public static routes = routes;
}
