import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  passwordsignUpHidden = true;

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    this.registerForm.markAsDirty();
    if (this.registerForm.valid) {
      this.registerService.Register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
          console.log("Başarıyla Eklendi");
          this.toastr.success('Kaydınız başarılı bir şekilde gerçekleşti.');
        },
        error: (err) => {
          console.error('Register failed', err);
          this.toastr.error('Kayıt sırasında bir hata oluştu.');
        }
      });
    } else {
      this.toastr.error('Lütfen tüm alanları doğru doldurduğunuzdan emin olun.');
    }
  }

  SignUpPasswordVisibility() {
    this.passwordsignUpHidden = !this.passwordsignUpHidden;
  }
}
