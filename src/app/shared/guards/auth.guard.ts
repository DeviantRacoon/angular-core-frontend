import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '@modules/web/services';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const routeService = inject(Router);

  const token = tokenService.getToken();

  if (token) {
    return true;
  } else {
    routeService.navigate(['/web']);
    return false;
  }

};
