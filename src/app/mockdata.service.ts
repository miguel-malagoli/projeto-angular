import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

	public mockData = [];
	public selectedData: Usuario = {
		name: "",
		id: 0,
		img: "",
		username: ""
	};
	private apiURL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

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

	constructor(private http: HttpClient) { }

	sayHi() {
		console.log("hai");
	}
	getMockData() {
		this.http.get(this.apiURL).subscribe(
			(data) => {
				this.mockData = Array.from(Object.keys(data), d => data[d]);
			}
		);
	}
	selectData(u: Usuario): void {
		this.selectedData = u;
	}
}
