import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  constructor( private routeAct: ActivatedRoute) { }

  ngOnInit() {

    this.routeAct.parent.params.subscribe( id => {
      console.log('Ruta HIJA Edit', id);
    } );

  }

}
