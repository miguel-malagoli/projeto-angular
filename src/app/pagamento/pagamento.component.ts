import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockdataService } from '../mockdata.service';
import { TransactionPayload } from '../transactionPayload';

@Component({
	selector: 'app-pagamento',
	templateUrl: './pagamento.component.html',
	styleUrls: ['./pagamento.component.css']
})
// Componente de pagamento
export class PagamentoComponent implements OnInit {

	// Variável usada como formulário
	dados;
	// Variável usada para formatar o valor do input
	quantiaInput = "";

	// Construtor com o serviço mockdata
	constructor(public mockdataService: MockdataService) { }
	// Inicializar o formulário
	ngOnInit(): void {
		this.dados = new FormGroup({
			quantia: new FormControl("", Validators.required),
			cartao: new FormControl("", Validators.required)
		})
	}
	// Função chamada pelo botão "Confirmar Pagamento", manda os dados do pagamento para o servidor
	confirmarPagamento(valores) {
		let payload: TransactionPayload = {
			card_number: this.mockdataService.mockCard[valores.cartao].card_number,
			cvv: this.mockdataService.mockCard[valores.cartao].cvv,
			expiry_date: this.mockdataService.mockCard[valores.cartao].expiry_date,
			destination_user_id: this.mockdataService.selectedData.id,
			value: parseInt(valores.quantia.replace(/[^0-9]/g, '')) / 100
		}
		console.log(payload);
		this.mockdataService.postData(payload);
		// Resetar o formulário após pagamento
		this.dados = new FormGroup({
			quantia: new FormControl("", Validators.required),
			cartao: new FormControl("", Validators.required)
		});
		this.quantiaInput = "";
	}
	// Função que formata o input da quantia sempre que ocorre o evento "input"
	formatarValor(e) {

		let novoValor = e.target.value;
		// Forçar duas casas decimais e trocar o "." por ","
		novoValor = novoValor.replace(/[^0-9]/g, '');
		novoValor = (parseInt(novoValor) / 100).toString();
		if(novoValor.search(/[.]/) === -1) {
			novoValor += ".00";
		} else if (novoValor.search(/[.]/) > novoValor.length - 3) {
			novoValor += "0";
		}
		novoValor = novoValor.replace(/[.]/, ',');
		// Inserir "." a cada 3 dígitos após a vírgula
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