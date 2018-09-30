import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { GalleryComponent } from './gallery.component';
import { GalleryService } from "./services/gallery.service";
import { routes } from "./gallery.routes";
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [GalleryComponent],
    providers: [GalleryService],
})
export class GalleryModule { }
