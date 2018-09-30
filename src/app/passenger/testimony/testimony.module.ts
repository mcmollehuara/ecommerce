import { NgModule } from '@angular/core';

import { TestimonyComponent } from './testimony.component';
import { TestimonyService  } from "./services/testimony.service";
import { routes } from "./testimony.routes";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [TestimonyComponent],
    providers: [TestimonyService],
})
export class TestimonyModule { 
    public static routes = routes;
}
