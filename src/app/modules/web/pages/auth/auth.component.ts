import { Component } from '@angular/core';
import { AuthService } from '@modules/web/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  theme: 'light' | 'dark' = 'light';
  showPassword = false;
  loginStatus: 'error' | 'success' | 'loading' | 'none' = 'none';

  credentials = { email: '', password: '' }

  constructor(
    private _authService: AuthService
  ) { }

  login() {
    if (this.credentials.email === '' || this.credentials.password === '') {
      this.loginStatus = 'error';
      return;
    }

    this.loginStatus = 'loading';
    setTimeout(() => {
      this._authService.login(this.credentials)
    }, 2000);
  }

}
