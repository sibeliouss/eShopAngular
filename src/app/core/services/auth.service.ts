import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn=false;

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
  


}
