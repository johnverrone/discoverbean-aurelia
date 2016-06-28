import {inject} from 'aurelia-framework';
import AuthService from 'AuthService';

@inject(AuthService)
export class Login {

  constructor(AuthService) {
    this.auth = AuthService;
  }

  login() {
    if (this.username && this.password) {
      this.auth.login(this.username, this.password);
    } else {
      this.error = 'Please enter a username and password.';
    }
  }

  activate() {
    this.username = '';
    this.password = '';
    this.error = '';
  }
}
