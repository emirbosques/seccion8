import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private routeAct: ActivatedRoute) { }

  ngOnInit() {

    this.routeAct.parent.params.subscribe( id => {
      console.log('Ruta HIJA Detalle', id);
    } );

  }

}
