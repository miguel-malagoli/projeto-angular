import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockdataService } from '../mockdata.service';

@Component({
	selector: 'app-pagamento',
	templateUrl: './pagamento.component.html',
	styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

	dados;
	quantiaInput = "";

	constructor(public mockdataService: MockdataService) { }

	ngOnInit(): void {
		this.dados = new FormGroup({
			quantia: new FormControl("", Validators.required),
			cartao: new FormControl("", Validators.required)
		})
	}

	confirmarPagamento(valores) {
		console.log(valores);
	}

	formatarValor(e) {
		console.log(e.target.value);

		let novoValor = e.target.value;

		novoValor = novoValor.replace(/[^0-9]/g, '');
		novoValor = (parseInt(novoValor) / 100).toString();
		if(novoValor.search(/[.]/) === -1) {
			novoValor += ".00";
		} else if (novoValor.search(/[.]/) > novoValor.length - 3) {
			novoValor += "0";
		}
		novoValor = novoValor.replace(/[.]/, ',');

		let temp = novoValor;
		let contador = 0;
		for(let i = novoValor.length - 4; i > 0; i--) {
			contador++;
			if (contador >= 3) {
				novoValor = novoValor.substr(0, i) + "." + novoValor.substr(i);
				contador = 0;
			}
		}
		e.target.value = novoValor;
	}
}