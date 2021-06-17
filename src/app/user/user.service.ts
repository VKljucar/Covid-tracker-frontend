import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Authority } from '../constants/authority.constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private usrUrl = 'http://localhost:8080';

    currentUser: User | null;

    private usersUrl = `${this.usrUrl}/api/user`;

    constructor(private http: HttpClient) { }

    getCurrentUser(): Observable<User> {
        return this.http.get<User>(`${this.usrUrl}/api/user/current-user`);
    }

    isRoleAdmin(): boolean {
        if (this.currentUser) {
            return this.currentUser.authorities.some((authority: string) => authority === Authority.ADMIN);
        } else {
            return false;
        }
    }

}
