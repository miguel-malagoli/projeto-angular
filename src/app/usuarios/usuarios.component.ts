import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

	usuario: Usuario = {
		name: "Eduardo Santos",
		id: 1001,
		username: "@eduardo.santos"
	};

	constructor() { }

	ngOnInit(): void {
	}

}