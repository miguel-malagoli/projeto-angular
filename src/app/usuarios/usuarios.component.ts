import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styleUrls: ['./usuarios.component.css']
})

// Componente da lista de usuários
export class UsuariosComponent implements OnInit {

	// Construtor com o serviço mockdata, usado no template para obter os usuários
	constructor(public mockdataService: MockdataService) { }

	ngOnInit(): void {
	}
	// Marcar um dos usuários providenciados pelo servico como "selecionado"
	select(u: Usuario): void {
		this.mockdataService.selectData(u);
		// Resetar a resposta da transação anterior, caso haja uma
		this.mockdataService.endpointResponse = undefined;
	}
}