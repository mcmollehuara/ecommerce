import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactService  } from "./services/contact.service";
import { routes } from "./contact.routes";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [ContactComponent],
    providers: [ContactService],
})
export class ContactModule { 
    public static routes = routes;
}
