import { OnInit, Component } from '@angular/core';
import { Usuario } from '../../class/Usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private router: Router) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.Login();
  }

  ngOnInit() {}

  Login() {
    let userPasswordLS: any = localStorage.getItem(this.usuario.userName);
    let userExist = userPasswordLS !== null;

    if (userExist)
      if (userPasswordLS === this.usuario.password) {
        this.SwalMessage("Bienvenido", "Se ha logueado correctamente!!")
        this.navigateToBienvenido();
      } else {
        this.confirm();
        this.SwalErrorMessage('Error', 'El password ingresado es incorrecto');
      }
    else {
      this.Register();
      this.SwalMessage("Bienvenido!", "Se ha creado una cuenta")
      this.navigateToBienvenido();
    }
  }

  Register() {
    localStorage.setItem(this.usuario.userName, this.usuario.password);
  }

  navigateToBienvenido() {
    this.router.navigate(['/bienvenido']);
  }

  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to undo this action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked the confirm button
      } else if (result.isDenied) {
        // User clicked the cancel button
      }
    });
  }

  SwalErrorMessage(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  }

  SwalSuccessMessage(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  SwalMessage(title: string, text: string) {
    Swal.fire(
      title,
      text,
      'success'
    )}
}
