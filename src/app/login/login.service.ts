import { Injectable } from '@angular/core';
import { UserCredentials } from './user-cred.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtToken } from './jwt-token.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private loginUrl = 'http://localhost:8080';

    constructor(
      private http: HttpClient
    ) { }
  
    authenticate(userCredentials: UserCredentials): Observable<JwtToken> {
      return this.http.post<JwtToken>(`${this.loginUrl}/api/authenticate`, userCredentials);
    }
  
    logout(): void {
      localStorage.removeItem('token');
    }


}