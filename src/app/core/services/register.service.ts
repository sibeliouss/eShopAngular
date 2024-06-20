import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  api="http://localhost:5278/api/Customers";

  Register(register:Register):Observable<Register>{
    return this.http.post<Register>(this.api,register);
  }
}
