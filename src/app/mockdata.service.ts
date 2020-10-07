import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { TransactionPayload } from './transactionPayload';

@Injectable({
  providedIn: 'root'
})

// Serviço que organiza os dados recebidos e mandados ao "servidor"
export class MockdataService {

	// Usuários
	public mockData = [];
	public selectedData: Usuario = {
		name: "",
		id: 0,
		img: "",
		username: ""
	};
	// Resposta da transação
	public endpointResponse;
	// URLs usadas pelo HTTPClient
	private apiURL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";
	private endpointURL = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";
	// Cartões disponíveis
	public mockCard = [
		{
			card_number: '1111111111111111',
			cvv: 789,
			expiry_date: '01/18',
		},
		{
			card_number: '4111111111111234',
			cvv: 123,
			expiry_date: '01/20',
		}
	];

	// Construtor com HTTPClient
	constructor(private http: HttpClient) { }
	// Função que busca os dados necessários imediatamente - a lista de usuários
	getMockData() {
		this.http.get(this.apiURL).subscribe(
			(data) => {
				this.mockData = Array.from(Object.keys(data), d => data[d]);
			}
		);
	}
	// Função que marca um usuário como "selecionado" (ou desfaz a seleção, se uma já existir)
	selectData(u: Usuario): void {
		if (this.selectedData.id != 0) {
			this.selectedData = {
				name: "",
				id: 0,
				img: "",
				username: ""
			};
		} else {
			this.selectedData = u;
		}
	}
	// Função que manda os dados da transação para o servidor
	postData(postData: TransactionPayload) {
		this.http.post(this.endpointURL, postData).subscribe(
			(data) => {
				this.endpointResponse = data;
			}
		);
	}
}