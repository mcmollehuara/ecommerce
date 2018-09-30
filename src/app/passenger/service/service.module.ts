import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServiceService  } from "./services/service.service";
import { routes } from "./service.routes";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [ServiceComponent],
    providers: [ServiceService],
})
export class ServiceModule {
    public static routes = routes;
 }
