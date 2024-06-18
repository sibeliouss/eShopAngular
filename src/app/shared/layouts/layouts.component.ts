import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar/topbar.component";
import { MiddlebarComponent } from "./middlebar/middlebar.component";


@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.scss',
    imports: [TopbarComponent, MiddlebarComponent]
})
export class LayoutsComponent {

}
