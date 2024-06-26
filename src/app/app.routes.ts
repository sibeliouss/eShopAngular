import { Routes } from '@angular/router';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { LoginComponent } from './core/login/login/login.component';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [

    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent},
    {path:'login',component:LoginComponent},
    {path:'register', component:RegisterComponent}
];
