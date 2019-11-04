import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuarios.model';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = '';
    // aqui arriba si ponemos un usuario nos sale en la web por defecto
  }
  validarFormulario(form: NgForm ){

    if (form.invalid) {
        return;
    }

    this.autenticacion.nuevoUsuario( this.usuario )
    .subscribe( resp => {
      console.log(resp);
    }, (error)=> {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message
      });
    });
    // console.log("Formulario enviado de: ", this.usuario);
    // console.log("Form: ", form);
  }





}
