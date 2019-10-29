import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioComponent } from '../../models/usuario/usuario.component';
import { AutenticacionService } from '../../service/autenticacion.service';
// ES6 MODULES OR TYPESCRIPT
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login( form: NgForm) {
    if (form.invalid) {
        return;
    }
    Swal.fire({
      allowOutsideClick: false, //prevenir cerrar el alert al clicar
      type: 'info',
      text: 'Espere por favor ...'
    });
    //METODO PARA QUE NO APAREXCA BOTON DE ACEPTAR/OK
    Swal.showLoading();

    this.autenticacion.login( this.usuario )
    .subscribe( resp => {
      console.log(resp);
    }, (error)=> {
      console.log(error);
      console.log(error.error.error,onmessage);
    });


  }

}
