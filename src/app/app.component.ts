import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsComponent } from "./shared/layouts/layouts.component";
import { ToastrModule } from 'ngx-toastr';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LayoutsComponent,ToastrModule]
})
export class AppComponent {
  title = 'eShopAngular';
}
