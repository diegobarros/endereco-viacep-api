import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from './endereco';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'endereco-viacep-api';

  public enderecos: Endereco[] = [];
  public endereco: Endereco | undefined;

  public estados = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];

  public cep: string = '';
  public uf: string = '';
  public nomeDaCidade: string = "";
  public logradouro: string = '';

  constructor(private enderecoService: EnderecoService) {}

  public getEndereco(): void {
    this.enderecoService.getEndereco(this.cep).subscribe({
      next: (response: Endereco) => {
        this.endereco = response;
      },

      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }

  public getEnderecos(): void {
    this.enderecoService.getEnderecos(this.uf, this.nomeDaCidade, this.logradouro).subscribe({
      next: (response: Endereco[]) => {
        this.enderecos = response;
        console.log(this.enderecos);
        
      },

      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
  }
}
