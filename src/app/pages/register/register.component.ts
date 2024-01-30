import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auths/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService); // inject vao bien

  registerUser = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  registerUserError: string = '';

  handleSubmit() {
    this.registerUserError = this.validateRegistration();

    if (!this.registerUserError) {
      const user = {
        fullname: this.registerUser.fullname,
        email: this.registerUser.email,
        password: this.registerUser.password
      };

      this.authService.registerUser(user).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // Handle successful registration (redirect, show success message, etc.)
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle registration failure (show error message, log, etc.)
          this.registerUserError = 'Registration failed. Please try again.';
        }
      );
    }
  }

  private validateRegistration(): string {
    if (!this.registerUser.fullname || !this.registerUser.email || !this.registerUser.password || !this.registerUser.confirmPassword) {
      return 'All fields are required';
    }

    if (this.registerUser.password !== this.registerUser.confirmPassword) {
      return 'Passwords do not match';
    }

    // You can add more validation logic as needed, e.g., email format, password strength, etc.

    return '';
  }
    // validate required all + email, password  === confirmPassword
    // call api register user
}
