import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgFor,HeaderComponent,FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerUser = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit() {
    console.log(this.registerUser);
    // validate required all + email, password  === confirmPassword
    // call api register user
  }
}
