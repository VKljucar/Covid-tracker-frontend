import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private loginUrl = 'http://localhost:8080/login';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.loginUrl)
          .pipe(
            tap(_ => console.log('dohvati korisnike')),
            catchError(this.handleError<User[]>('getUsers', []))
          );
      }

    getUser(korisnikoIme: string, lozinka: string): Observable<User> {
        const url = `${this.loginUrl}/${korisnikoIme}/${lozinka}`;
        return this.http.get<User>(url)
          .pipe(
            tap(_ => console.log(`dohvati korisnika korisnikoIme=${korisnikoIme}/lozinka=${lozinka}`)),
            catchError(this.handleError<User>(`getUser korisnikoIme=${korisnikoIme}/lozinka=${lozinka}`))
          );
      }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(operation);
            console.error(error);
            return of(result as T);
        };
    }


}