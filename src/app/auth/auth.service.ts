import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated:boolean = true;
  private _userId = 'abc';

  get userId(){
    return this._userId;
  }

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
