import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactService  } from "./services/contact.service";
@NgModule({
    imports: [],
    exports: [],
    declarations: [ContactComponent],
    providers: [ContactService],
})
export class ContactModule { }
