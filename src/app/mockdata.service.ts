import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

	public mockData = [];
	public selectedData: Object;
	private apiURL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

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
	selectData(u: Object): void {
		this.selectedData = u;
	}
}
