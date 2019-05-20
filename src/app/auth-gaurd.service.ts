import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor( private autherService: AuthService,private router: Router ) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if( this.autherService.isAuthenticated()){
    return true;
   } else {
     this.router.navigate(['/', 'login'] )
   }

  }
}
