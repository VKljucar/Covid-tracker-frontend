import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NovozarazeniUpisComponent } from './novozarazeni-upis/novozarazeni-upis.component';
import { NovozarazeniPregledComponent } from './novozarazeni-pregled/novozarazeni-pregled';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'root', component: AppComponent },
  { path: 'novozarazeni-upis', component: NovozarazeniUpisComponent },
  { path: 'novozarazeni-pregled', component: NovozarazeniPregledComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
