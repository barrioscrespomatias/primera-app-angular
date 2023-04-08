import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from '../../class/Usuario';

import { UsuarioService } from '../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  fb: FormBuilder = new FormBuilder();
  usuario: Usuario = new Usuario(this.fb);

  // usuario: Usuario;
  usuarioSubscription: Subscription = new Subscription();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();

    this.usuarioSubscription = this.usuarioService.usuarioCambiado.subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      }
    );
  }

  // onSubmit() {
  //   // TODO: Handle form submission
  // }

  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
  }
}
