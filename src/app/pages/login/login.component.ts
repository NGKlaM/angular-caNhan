import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgFor,HeaderComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  loginUser = {
    email: '',
    password: '',
  };

  handleLogin() {
    sessionStorage.setItem('token', 'token');
    // validate required all + email
    // call api login
    this.router.navigate(['/admin/products']);
  }
}
