import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { User } from './user/user';
import { Authority } from './constants/authority.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'covid-tracker';
  admin = 'test';

  constructor(
    private loginService: LoginService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.userService.currentUser = currentUser;
    });
  }

  logout() {
    this.loginService.logout();
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return !!this.userService.currentUser;
  }

  isRoleAdmin(): boolean {
    if (this.userService.currentUser) {
        return this.userService.currentUser.authorities.some((authority: string) => authority === Authority.ADMIN);
    } else {
        return false;
    }
}
}
