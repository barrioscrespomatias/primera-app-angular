import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ComponenteSumaPromedioComponent } from './components/componente-suma-promedio/componente-suma-promedio.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent, ComponenteSumaPromedioComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ComponenteSumaPromedioComponent]
})
export class AppModule { }
