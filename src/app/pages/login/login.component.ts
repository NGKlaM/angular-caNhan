import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auths/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginUser = {
    email: '',
    password: '',
  };

  emailError: string;
  passwordError: string;
  
  constructor(private authService: AuthService, private router: Router) {
    this.emailError = '';
    this.passwordError = '';
  }

  handleLogin() {
    this.emailError = this.validateEmail();
    this.passwordError = this.validatePassword();

    if (!this.emailError && !this.passwordError) {
      this.authService.loginUser(this.loginUser).subscribe(
        (response) => {
          console.log('Login successful', response);
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/admin/products']);
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }

  private validateEmail(): string {
    if (!this.loginUser.email) {
      return 'Email is required';
    }
    return '';
  }

  private validatePassword(): string {
    if (!this.loginUser.password) {
      return 'Password is required';
    }
    return '';
  }
}
