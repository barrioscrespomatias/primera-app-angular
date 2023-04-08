import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';

import { Usuario } from '../class/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  fb: FormBuilder = new FormBuilder();
  private usuario = new Usuario(this.fb);
  usuarioCambiado = new Subject<Usuario>();

  getUsuario(): Usuario {
    return this.usuario;
  }

  actualizarUsuario(usuario: Usuario) {
    this.usuario = usuario;
    this.usuarioCambiado.next(this.usuario);
  }
}
