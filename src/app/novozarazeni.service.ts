import { Injectable } from "@angular/core";
import { Novozarazeni } from "./novozarazeni";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class NovozarazeniService {

    private novozarazeniUrl = 'http://localhost:8080/novozarazeni';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    addNovozarazeni(novozarazeni: Novozarazeni): Observable<Novozarazeni>{
        return this.http.post<Novozarazeni>(this.novozarazeniUrl, novozarazeni, this.httpOptions).pipe(
            tap((newNovozarazeni: Novozarazeni) => console.log(`dodan novozarazeni w/ IME=${newNovozarazeni.ime}`)),
            catchError(this.handleError<Novozarazeni>('addNovozarazeni'))
        );
    }

    getNovozarazeni(): Observable<Novozarazeni[]>{
        return this.http.get<Novozarazeni[]>(this.novozarazeniUrl)
        .pipe(
            tap(_ => console.log('dohvaceni novozarazeni')),
            catchError(this.handleError<Novozarazeni[]>('getNovozarazeni', []))
        );
    }

    getByParameters(ime: string, prezime: string, hospitaliziran: string): Observable<Novozarazeni[]> {
        const url = `${this.novozarazeniUrl}/param?ime=${ime}&prezime=${prezime}&hospitaliziran=${hospitaliziran}`;
        return this.http.get<Novozarazeni[]>(url)
          .pipe(
            tap(_ => console.log(`fetched novozarazemi ime=${ime}, prezime=${prezime}`)),
            catchError(this.handleError<Novozarazeni[]>(`getByParameters ime=${ime}, prezime=${prezime}`))
          );
      }

    deleteNovozarazeni(id: number): Observable<Novozarazeni>{
        const url = `${this.novozarazeniUrl}/${id}`;
        return this.http.delete<Novozarazeni>(url).pipe(
            tap(_ => console.log(`deleted novozarazemi id=${id}`)),
            catchError(this.handleError<Novozarazeni>(`delete novozarazeni id=${id}`))
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