import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTNIG } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent,
    UsuarioEditComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ROUTNIG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
