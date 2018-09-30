import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CompanyComponent } from './company.component';
import { CompanyJobComponent } from './jpb/company-job.component';
import { routes } from "./company.routes";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [CompanyComponent, CompanyJobComponent],
    providers: [],
})
export class CompanyModule { }
