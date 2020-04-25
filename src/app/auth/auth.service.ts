import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated:boolean = false;

  constructor() { }

  login(){
    this._userIsAuthenticated = true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }

  getUserIsAuthenticated(){
    return this._userIsAuthenticated;
  }
}
