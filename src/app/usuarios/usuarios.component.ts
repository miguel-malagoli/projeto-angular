import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service'

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

	select(u: Object): void {
		this.mockdataService.selectData(u);
		console.log(this.mockdataService.selectedData);
	}
}