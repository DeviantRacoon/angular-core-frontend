import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; 
import { TokenService } from '../authentication/token.service'; 
import { Router } from '@angular/router'; 

export const redirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const routeService = inject(Router);

  const token = tokenService.getToken();

  if (token) {
    routeService.navigate(['/home']);
  } 
  
  return true;
};
