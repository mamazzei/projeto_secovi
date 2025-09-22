import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardTitle } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginCliente } from './login-cliente';

import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatCardModule, MatLabel, MatCardContent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  loginCliente: LoginCliente = LoginCliente.newLoginCliente();
  loginForm: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null>; }>;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });   

}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.loginCliente.email = value.email || '';
      this.loginCliente.password = value.password || '';
    });
  }
  onSubmit() {
    this.loginService.logar(this.loginCliente).subscribe({
      next: response => console.log('Login bem-sucedido:', response),
      error: erro => console.error('Erro no login:', erro)
    });
  }
}
