import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

	constructor(public mockdataService: MockdataService) { }

	ngOnInit(): void {
		console.log(this.mockdataService.mockData);
	}

	select(u: Usuario): void {
		this.mockdataService.selectData(u);
		this.mockdataService.endpointResponse = undefined;
	}
}