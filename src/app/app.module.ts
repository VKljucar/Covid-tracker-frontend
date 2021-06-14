import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NovozarazeniPregledComponent } from './novozarazeni-pregled/novozarazeni-pregled';
import { NovozarazeniUpisComponent } from './novozarazeni-upis/novozarazeni-upis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NovozarazeniPregledComponent,
    NovozarazeniUpisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
