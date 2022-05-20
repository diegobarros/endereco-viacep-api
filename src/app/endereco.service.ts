import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco';

@Injectable({
  providedIn: 'root'
})

export class EnderecoService {

  private urlBase = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getEnderecos(uf: String, nomeDaCidade: String, logradouro: string): Observable<Endereco[]> {
    
    return this.http.get<any>(`${this.urlBase}/${uf}/${nomeDaCidade}/${logradouro}/json/`);

  }

  public getEndereco(cep: String): Observable<Endereco> {
    
    return this.http.get<any>(`${this.urlBase}/${cep}/json/`);

  }

}
