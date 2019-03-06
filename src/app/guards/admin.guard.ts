import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!(prompt('Mot de passe : ') === 'admin')) {
        this.router.navigateByUrl('')
      }
      
      return true 
  }

  constructor(private router: Router) {}
  
}
