import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginResponse } from '../../models/AccessToken';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { CustomerService } from '../../../features/services/customer.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../../features/models/customer';
import { Response } from '../../../features/models/response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, CommonModule,FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  log!:LoginRequest;
  passwordLoginHidden=true;
  customerList: Customer[]=[];
  currentToken: any= this.tokenService.getToken();

  constructor( private formBuilder:FormBuilder,
    private loginService:LoginService,
    private router: Router,
    private tokenService: TokenService,
    private customerService: CustomerService,
    private auth:AuthService,
    private toastr:ToastrService) {}

  

  ngOnInit(): void {
    
  }

  
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6),]],
    authenticatorCode: ['string']
  });

  onLogin(){
    if(this.loginForm.valid){
    this.log=this.loginForm.value as LoginRequest;
    console.log("Formdan gelen giriş bilgileri:",this.log);
    this.loginService.Login(this.log.email,this.log.password,this.log.authenticatorCode).subscribe((logData:LoginResponse)=>{
      logData.email=this.log.email;
      localStorage.setItem('Token',logData.accessToken.token);
      this.toastr.success('Başarılı bir şekilde giriş yaptınız.');
      this.router.navigateByUrl('/homepage');
    })}


    else{
    this.toastr.info('Eksik bilgi girdiniz.')}
  }

  getCustomers(){
    this.customerService.getAll().subscribe((response:Response<Customer>)=>{
      this.customerList=response.items;
      console.log("Customer List:", this.customerList);
    })
  }

  SignInPasswordVisibility() {
    this.passwordLoginHidden = !this.passwordLoginHidden;
  }

}
