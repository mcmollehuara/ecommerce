import { NgModule } from '@angular/core';

import { CompanyComponent } from './company.component';
import { CompanyService  } from "./services/company.service";
import { routes } from "./company.routes";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [CompanyComponent],
    providers: [CompanyService],
})
export class CompanyModule { 
    public static routes = routes;
}
