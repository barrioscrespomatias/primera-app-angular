import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponenteSumaPromedioComponent } from './components/componente-suma-promedio/componente-suma-promedio.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteSumaPromedioComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent, ComponenteSumaPromedioComponent],
})
export class AppModule {}
