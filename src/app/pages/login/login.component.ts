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
  usuario: UsuarioComponent;
  recordarme: boolean;

  constructor(private autenticacion: AutenticacionService ) { }

  ngOnInit() {
  }

  login( form: NgForm) {
    if ( form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: true, //prevenir cerrar el alert al clicar
      type: 'info',
      text: 'Espere por favor ...'
    });
    //METODO PARA QUE NO APAREZCA BOTON DE ACEPTAR/OK
    Swal.showLoading();

    this.autenticacion.login( this.usuario )
    .subscribe( resp => {
      console.log(resp);
      Swal.close();

      //Controlo si se ha pulsado correctamente
      if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
      }


    }, (error)=> {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message
      });
    });


  }

}
