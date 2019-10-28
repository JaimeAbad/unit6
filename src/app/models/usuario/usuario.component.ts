import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

nuevoUsuario( usuario: UsuarioComponent){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

}
  email:string;
  password:string;
  nombre:string;


}
