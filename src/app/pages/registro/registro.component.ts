import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from 'src/app/models/usuario/usuario.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioComponent;
  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioComponent();
    this.usuario.email = '';
    // aqui arriba si ponemos un usuario nos sale en la web por defecto
  }
  validarFormulario(form: NgForm ){
    console.log("Formulario enviado de: ", this.usuario);
    console.log("Form: ", form);
  }

}
