import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    hoTen : new FormControl('', [Validators.required, Validators.maxLength(25)]),
    diaChi : new FormControl(''),
    soDienThoai : new FormControl('', [Validators.required, Validators.pattern(/^0\d{9}$/)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    cmnd : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
  })
  isFormValid() {
    return this.loginForm.valid;
  }
}
