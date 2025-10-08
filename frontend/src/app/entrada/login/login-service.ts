import { Injectable } from '@angular/core';
import { LoginCliente } from './login-cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-models';
import { ConfigService } from '../../config/config.service';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  logar(loginCliente: LoginCliente): Observable<LoginResponse> {
    const apiUrl = this.configService.apiUrl + '/auth/login';
    console.log('Tentando logar com:', JSON.stringify(loginCliente), ' na URL:', apiUrl);
    return this.http.post<LoginResponse>(apiUrl, loginCliente);

  }


  login(loginCliente: LoginCliente) {
    console.log('Login realizado com sucesso:', loginCliente);
  }
}
