import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PassengerComponent } from './passenger.component';
//
// import { BottomComponent } from '../layout/bottom/bottom.component';
// import { TopComponent } from '../layout/top/top.component';
// import { NavbarComponent } from '../layout/navbar/navbar.component';
//
import { routes } from "./passenger.routes";
//
import { PassengerService } from "./passenger.service";
//
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [PassengerComponent],
    providers: [PassengerService],
})
export  class PassengerModule { 
    public static routes = routes;
}
