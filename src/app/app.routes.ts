import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { HomepageComponent } from './shared/homepage/homepage.component';

export const routes: Routes = [

    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent},
    {path:'login',component:LoginComponent}
];
