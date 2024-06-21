import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Customer } from '../../../features/models/customer';
import { TokenService } from '../../../core/services/token.service';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-middlebar',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './middlebar.component.html',
  styleUrl: './middlebar.component.scss'
})
export class MiddlebarComponent {

  loggedInCustomer: Customer|null=null;

  constructor(public tokenService: TokenService, private router: Router, public authService: AuthService){}
  
  isLoggedIn():boolean{
    this.loggedInCustomer=this.authService.loggedInCustomer;
    return this.tokenService.hasToken();
   
  }

  logOut():void{
    this.authService.loggedInCustomer=null;
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
    }
}