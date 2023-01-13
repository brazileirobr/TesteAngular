import { Component, Input } from '@angular/core';
import { Pessoa } from '../shared';
import { PessoaService, CadastroService } from '../sources';

@Component({
  selector: 'app-cadastropessoas',
  templateUrl: './cadastropessoas.component.html',
  styleUrls: ['./cadastropessoas.component.scss']
})
export class CadastropessoasComponent {

  constructor
  (
    private service: PessoaService,
    private cadastroService : CadastroService
  ) { }
  
  public get pessoaAtual(): Pessoa {
    return this.service.pessoaAtual;
  }
  
  public set pessoaAtual(value: Pessoa) {
    this.service.pessoaAtual = value;
  }

  public get editar(): boolean {
    return this.cadastroService.editar;
  }
  
  public set editar(value: boolean) {
    this.cadastroService.editar = value;
  }


}
