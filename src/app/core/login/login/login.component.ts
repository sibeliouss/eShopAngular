import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginResponse } from '../../models/AccessToken';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, CommonModule,FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  log!:LoginRequest;

  constructor( private formBuilder:FormBuilder,
    private loginService:LoginService) {
   
  }

  

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
    })}


    else{
    alert("Formdaki alanları doldurun")}
  }

}
