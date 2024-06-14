import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/AccessToken';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  localhost: number = 5278;
  apiUrl: string = `http://localhost:${this.localhost}/api/Auth/Login`;
  constructor(private httpClient:HttpClient) { }

  Login(email:string,password:string,authenticatorCode:string):Observable<LoginResponse>{
    return this.httpClient.post<LoginResponse>(this.apiUrl,{
      email,password,authenticatorCode});
  }
}
