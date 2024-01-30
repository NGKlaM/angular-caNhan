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
  constructor(private authService: AuthService, private router: Router) {}

  handleLogin() {
    this.authService.loginUser(this.loginUser).subscribe(
      (response) => {
        console.log('Login successful', response);

        // Lưu token vào sessionStorage hoặc nơi bạn muốn
        sessionStorage.setItem('token', response.token);

        // Chuyển hướng đến route mong muốn
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
