import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service'

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

	usuarioSelecionado: any;

	constructor(public mockdataService: MockdataService) { }

	ngOnInit(): void {
		console.log(this.mockdataService.mockData);
	}

	onSelect(u: any): void {
		this.usuarioSelecionado = u;
		console.log(this.usuarioSelecionado);
	}

}