import { Component } from '@angular/core';

import { MockdataService } from './mockdata.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Projeto Angular';

	constructor(private mockService: MockdataService) {}
	ngOnInit() {
		this.mockService.getMockData();
	}
}