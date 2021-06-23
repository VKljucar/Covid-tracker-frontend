import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { User } from './user/user';
import { Authority } from './constants/authority.constants';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from './constants/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'covid-tracker';
  admin = 'test';
  currentLanguage: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public userService: UserService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.userService.currentUser = currentUser;
    });

    this.setCurrentLanguageDropdownValue();
  }

  setCurrentLanguageDropdownValue() {
    if (this.translateService.currentLang === LanguageEnum.HR) {
      this.translateService.get('language.croatian').subscribe(language => this.currentLanguage = language);
    } else if (this.translateService.currentLang === LanguageEnum.EN) {
      this.translateService.get('language.english').subscribe(language => this.currentLanguage = language);
    } else {
      throw Error('Unknown current language!');
    }
  }

  onLanguageChange(newLanguage: string) {
    this.translateService.use(newLanguage).subscribe(
      languageSwitched => this.setCurrentLanguageDropdownValue()
    );
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
