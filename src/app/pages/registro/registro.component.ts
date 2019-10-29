import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from 'src/app/models/usuario/usuario.component';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioComponent;
  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit() {
    this.usuario = new UsuarioComponent();
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
      console.log(error.error.error,onmessage);
    });
    // console.log("Formulario enviado de: ", this.usuario);
    // console.log("Form: ", form);
  }





}
