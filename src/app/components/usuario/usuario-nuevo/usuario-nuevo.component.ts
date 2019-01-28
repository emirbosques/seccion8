import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private routeAct: ActivatedRoute) { }

  ngOnInit() {

    this.routeAct.parent.params.subscribe( id => {
      console.log('Ruta HIJA Nuevo', id);
    } );

  }

}
