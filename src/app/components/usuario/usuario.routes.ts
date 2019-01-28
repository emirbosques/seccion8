import { Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';


export const USUARIO_ROUTES: Routes = [

        {path: 'nuevo', component: UsuarioNuevoComponent},
        {path: 'detalle', component: UsuarioDetalleComponent},
        {path: 'editar', component: UsuarioEditComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];

