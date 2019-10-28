import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioComponent } from '../models/usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //url comun en varios servicios
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyAKfGSUr5qnCwubl5lsRTa4b0K8USTDZY4';

  constructor(private http: HttpClient) { }

  salir() { }

  //Registrar nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  nuevoUsuario ( usuario: UsuarioComponent ){
  }

  //Login
  // https://identitytoolkit.googleapis.com/v1/accounts:accounts:signInWithPassword?key=[API_KEY]
  login(usuario: UsuarioComponent){

  }


}
