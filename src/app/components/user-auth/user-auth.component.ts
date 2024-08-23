import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {

  router = inject(Router)

  authError: string = '';
  showLoginForm: boolean = true;

  email : string = 'admin@gmail.com'
  password: string = 'abc'
  userName: string = 'Admin'
  mobileNo : number = 1235689


  onRegisterBtn() {
    if (this.email === this.email &&
      this.mobileNo === this.mobileNo &&
      this.userName === this.userName &&
      this.password === this.password
    ) {
      this.authError = 'Successfully registered.';
      this.router.navigate(['']);
    }
  }

  onLoginBtn(): void {

    if (this.email == this.email &&
      this.password == this.password
    ) {
        this.router.navigate(['']);
    } else {
      this.authError = "Wrong credentials."
    }
  }

  openLogin() {
    this.showLoginForm = true;
  }

  openRegister() {
    this.showLoginForm = false
  }


}
