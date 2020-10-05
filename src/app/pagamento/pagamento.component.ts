import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(public mockdataService: MockdataService) { }

  ngOnInit(): void {
  }

}
