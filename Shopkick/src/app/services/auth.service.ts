import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
 
  //     login(username: string, password: string) {
  //         return this.http.post<any>('/api/authenticate', { username: username, password: password })
  //             .map(user => {
  //                 // login successful if there's a jwt token in the response
  //                 if (user && user.token) {
  //                     // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                     localStorage.setItem('currentUser', JSON.stringify(user));
  //                 }
  //  
  //                 return user;
  //             });
  //     }
   
      logout() {
          // remove user from local storage to log user out
          alert('Logout method of AuthService')
          localStorage.removeItem('currentUser');
      }
}