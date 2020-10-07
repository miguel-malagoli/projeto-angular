import { Component } from '@angular/core';
import { MockdataService } from './mockdata.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Projeto Angular';

	// Construtor com serviço mockdata
	constructor(private mockService: MockdataService) {}
	ngOnInit() {
		// Iniciar serviço
		this.mockService.getMockData();
	}
}