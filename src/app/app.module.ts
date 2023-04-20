import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ComponenteSumaPromedioComponent } from './components/componente-suma-promedio/componente-suma-promedio.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // ComponenteSumaPromedioComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, RouterModule, SweetAlert2Module, BrowserAnimationsModule],
  providers: [],
  // bootstrap: [AppComponent, ComponenteSumaPromedioComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
