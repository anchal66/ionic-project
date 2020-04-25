import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService,
    private router: Router){}
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.authService.getUserIsAuthenticated()){
      console.log('auth');
      this.router.navigateByUrl('/auth');
    }
    return this.authService.getUserIsAuthenticated();
  }
}
