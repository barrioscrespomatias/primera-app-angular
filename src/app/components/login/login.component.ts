import { Component } from '@angular/core';
import { Usuario } from '../../class/Usuario';
import { FormBuilder } from '@angular/forms';

import { UsuarioService } from '../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // fb: FormBuilder = new FormBuilder();
  usuario: Usuario = new Usuario(this.fb);

  // usuario: Usuario;
  usuarioSubscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    this.usuarioSubscription = this.usuarioService.usuarioCambiado.subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      }
    );
  }

  // onSubmit() {
  //   this.usuarioService.actualizarUsuario(this.usuario);
  // }

  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
  }
}
