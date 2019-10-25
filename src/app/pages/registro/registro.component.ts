import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from 'src/app/models/usuario/usuario.component';

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
    this.usuario.email = 'jimmyesp@gmail.com';
  }

}
