import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Dashboard } from "./dashboard";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ){}

    getAllNovozarazeni(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/allNovi')
        .pipe(
            tap(_ => console.log('dohvaceni novozarazeni')),
            catchError(this.handleError<number>('getNovozarazeni'))
        );
    }

    getNovozarazeniForDay(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/novi')
        .pipe(
            tap(_ => console.log('dohvaceni novozarazeni')),
            catchError(this.handleError<number>('getNovozarazeniForDay'))
        );
    }

    getAllHospitalizirani(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/allHosp')
        .pipe(
            tap(_ => console.log('dohvaceni hospitalizirani')),
            catchError(this.handleError<number>('getAllHospitalizirani'))
        );
    }

    getHospitaliziraniForDay(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/hosp')
        .pipe(
            tap(_ => console.log('dohvaceni hospitalizirani')),
            catchError(this.handleError<number>('getHospitaliziraniForDay'))
        );
    }

    getAllCijepljeni(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/allCijep')
        .pipe(
            tap(_ => console.log('dohvaceni cijepljeni')),
            catchError(this.handleError<number>('getAllCijepljeni'))
        );
    }

    getCijepljeniForDay(): Observable<number>{
        return this.http.get<number>('http://localhost:8080/dashboard/cijep')
        .pipe(
            tap(_ => console.log('dohvaceni cijepljeni')),
            catchError(this.handleError<number>('getCijepljeniForDay'))
        );
    }

    getNovozarazeniByDay(): Observable<Dashboard[]>{
        return this.http.get<Dashboard[]>('http://localhost:8080/dashboard/graf1')
        .pipe(
            tap(_ => console.log('dohvaceni novozarazeni')),
            catchError(this.handleError<Dashboard[]>('getNovozarazeniByDay'))
        );
    }

    getHospitaliziraniByDate(): Observable<Dashboard[]>{
        return this.http.get<Dashboard[]>('http://localhost:8080/dashboard/graf2')
        .pipe(
            tap(_ => console.log('dohvaceni hospitalizirani')),
            catchError(this.handleError<Dashboard[]>('getHospitaliziraniByDate'))
        );
    }

    getCijepljeniByDate(): Observable<Dashboard[]>{
        return this.http.get<Dashboard[]>('http://localhost:8080/dashboard/graf3')
        .pipe(
            tap(_ => console.log('dohvaceni cijepljeni')),
            catchError(this.handleError<Dashboard[]>('getCijepljeniByDate'))
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