import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Customer } from '../../features/models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn=false;
  private _loggedInCustomer: Customer | null = null;
  constructor(private tokenService: TokenService) { }

  login(){
    this.isLoggedIn=true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(){
    if(this.isLoggedIn){
      this.isLoggedIn=false;
      localStorage.removeItem('isLoggedIn');
      localStorage.clear();
    }
  }
  isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('isLoggedIn') || 'false' );
  }
  
  get loggedInCustomer(): Customer| null{
    if(!this._loggedInCustomer){
      const customerData= localStorage.getItem('loggedInCustomer');
      this._loggedInCustomer=customerData? JSON.parse(customerData):null;

    }
    return this._loggedInCustomer;
  }
 
  set loggedInCustomer(customer: Customer| null){
    this._loggedInCustomer=customer;
    if(customer){
      localStorage.setItem('loggedInCustomer',JSON.stringify(customer));
    }
    else{
      localStorage.removeItem('loggedInCustomer');
    }
  }

}