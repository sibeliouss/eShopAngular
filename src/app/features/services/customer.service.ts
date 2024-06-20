import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:5278/api/Customers";

  getAll():Observable<ResponseModel<Customer>>{
    return this.http.get<ResponseModel<Customer>>(
      this.apiUrl+'?PageIndex=0&PageSize=10'
    );
  }
  getById(id:number):Observable<Response<Customer>>{
    return this.http.get<Response<Customer>>(this.apiUrl+'/'+id)
  }

}
