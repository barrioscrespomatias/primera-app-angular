import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

export class Usuario {
  usuarioForm = this.fb.group({
    nombre: [''],
    clave: ['', Validators.required],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

  constructor(private fb: FormBuilder) {}
}
