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

  constructor() {}
}
