import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NovozarazeniPregledComponent } from './novozarazeni-pregled/novozarazeni-pregled';
import { NovozarazeniUpisComponent } from './novozarazeni-upis/novozarazeni-upis.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';
import { ForbiddenPageComponent } from './forbidden-access/forbidden-access.component';
import { DashboardComponent } from './dashboard/dashboard-component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NovozarazeniPregledComponent,
    NovozarazeniUpisComponent,
    ForbiddenPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
