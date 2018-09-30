import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinationComponent } from './destination.component';
import { DestinationService  } from "./services/destination.service";
import { DestinationRoutes } from "./destination.routes";

@NgModule({
    imports: [RouterModule, DestinationRoutes],
    exports: [],
    declarations: [DestinationComponent],
    providers: [DestinationService],
})
export class DestinationModule { }