import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './entrada/logado/auth-service';
import { CookieService } from 'ngx-cookie-service';
import { LogoutService } from './entrada/login/logout-service';
import { ConfigService } from './config/config.service';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, RouterLink, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AuthService, LogoutService, CookieService, ConfigService]
})
export class App {
  authService: AuthService;
  loginCliente: any;
  logoutService: LogoutService;
  router: Router;
  configService: ConfigService;

  public mostrarModalCadastro: boolean = false;

  private cookieService: CookieService;
  constructor(authService: AuthService, logoutService: LogoutService, cookieService: CookieService, router: Router, configService: ConfigService) {
    this.authService = authService;
    this.logoutService = logoutService;
    this.cookieService = cookieService;
    this.router = router;
    this.configService = configService;
  }
  public abrirModalCadastro() {
    this.mostrarModalCadastro = true;
  }
  protected readonly title = signal('frontend');
  logout() {
    console.log('Realizando logout');
    this.logoutService.logout().subscribe({
      next: (response: any) => {
        console.log('Logout realizado com sucesso:', response);
        this.cookieService.delete('jwt', '/', 'localhost', true, 'Lax');
        this.authService.removeToken();
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error('Erro ao realizar logout:', error);
      }
    });
  }
}
