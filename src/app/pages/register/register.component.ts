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

  handleSubmit() {
    const user = {
      fullname: this.registerUser.fullname,
      email: this.registerUser.email,
      password: this.registerUser.password
    }
    this.authService.registerUser(user).subscribe(() => { })
    // validate required all + email, password  === confirmPassword
    // call api register user
  }
}
