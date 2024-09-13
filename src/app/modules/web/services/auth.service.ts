import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

import { environment } from '@environments/environment';
// import { User } from '@shared/interfaces/administration/user.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private cookieService: CookieService
  ) { }

  login(data: { email: string; password: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.tokenService.setToken('true');
    this.router.navigate(['/']);
    return { ok: true };

    // return this.http.post<any>(`${environment.API_URL}/user/login`, data, { headers, observe: 'response' })
    //   .pipe(tap((response) => { this.setAuthToken(response) }));
  }

  setAuthToken(response: HttpResponse<any>) {
    const authorization = response.headers.get('Authorization');
          
    if (authorization && response.body.ok) {
      this.tokenService.setToken(authorization);
      this.setCurrentUser(response.body.data);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.deleteCurrentUser();
    this.router.navigate(['/web']);
  }

  setCurrentUser(user: any) {
    this.cookieService.set('current', JSON.stringify(user));
  }

  getCurrentUser(): any {
    return JSON.parse(this.cookieService.get('current'));
  }

  deleteCurrentUser() {
    this.cookieService.delete('current');
  }

}
