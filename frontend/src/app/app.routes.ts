import { Routes } from '@angular/router';
import { Logado } from './entrada/logado/logado';
import { Login } from './entrada/login/login';
import { Logado as logadoFuncionario } from './funcionario/logado/logado';
import { Logado as logadoAdmin } from './admin/logado/logado';
import { Logado as logadoCliente } from './cliente/logado/logado';
import { AuthGuard } from './auth-guard';


export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'admin',
        component: logadoAdmin,
        canActivate: [AuthGuard]

    },
    {   
        path: 'funcionario',
        component: logadoFuncionario,
        canActivate: [AuthGuard]
    },
    {
        path: 'cliente',
        component: logadoCliente,
        canActivate: [AuthGuard]
    }

];
