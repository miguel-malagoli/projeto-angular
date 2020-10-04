import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { MockdataService } from './mockdata.service';
import { PagamentoComponent } from './pagamento/pagamento.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MockdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
