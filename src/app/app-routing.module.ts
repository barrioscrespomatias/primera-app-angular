import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from '../app/components/bienvenido/bienvenido.component';
import { ErrorComponent } from '../app/components/error/error.component';
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent} //pagina de error
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
