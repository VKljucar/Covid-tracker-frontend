import { Component, OnInit , Input} from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent  {

    users!: User;

    constructor(
        private loginService: LoginService

    ) { }

    getUser(korisnickoIme: string, lozinka: string): void {
        this.loginService.getUser(korisnickoIme, lozinka)
        .subscribe(users => this.users = users);
    }

}