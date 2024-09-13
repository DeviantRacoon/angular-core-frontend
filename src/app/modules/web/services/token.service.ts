import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private _cookieService: CookieService
  ) { }

  getToken() {
    const token = this._cookieService.get('token');
    return token;
  };

  setToken(token: string) {
    this._cookieService.set('token', token);
  }

  removeToken() {
    this._cookieService.delete('token');
  }

}
