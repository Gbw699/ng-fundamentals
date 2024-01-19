import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName;
  password;

  login(formValue) {
    console.log(formValue);
  }
}
