import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Aluno, Pessoa, Professor } from '../shared';
import { PessoaService, CadastroService } from '../sources';


@Component({
  selector: 'app-listarpessoas',
  templateUrl: './listarpessoas.component.html',
  styleUrls: ['./listarpessoas.component.scss']
})

export class ListarpessoasComponent {
  @Output('selected')
  selectedEmitter: EventEmitter<Pessoa> = new EventEmitter();


  constructor(
    private pessoaService: PessoaService,
    private cadastroService: CadastroService
  ) { }

  //=================LISTA DE PESSOAS =========
  public get pessoas(): Pessoa[] {
    return this.pessoaService.pessoas;
  }
  public set pessoas(value: Pessoa[]) {
    this.pessoaService.pessoas = value;
  }

  //===============PESSOA==================
  public get pessoa(): Pessoa {
    return this.pessoaService.pessoaAtual;
  }
  public set pessoa(value: Pessoa) {
    this.pessoaService.pessoaAtual = value;
  }

  //===================DATA ALUNO=================
  public get dataAluno(): { numeroMatricula: string; } {
    return this.pessoaService.dataAluno;
  }
  public set dataAluno(value: { numeroMatricula: string; }) {
    this.pessoaService.dataAluno = value;
  }

  //===================DATA PROFESSOR=================
  public get dataProfessor(): { especialidade: string; conhecimentos: string[]; } {
    return this.pessoaService.dataProfessor;
  }
  public set dataProfessor(value: { especialidade: string; conhecimentos: string[]; }) {
    this.pessoaService.dataProfessor = value;
  }

  //=============CADASTRO=================
  public get cadastro(): boolean {
    return this.cadastroService.cadastrar;
  }
  public set cadastro(value: boolean) {
    this.cadastroService.cadastrar = value;
  }

  //=============EDITAR=================
  public get editar(): boolean {
    return this.cadastroService.editar;
  }
  public set editar(value: boolean) {
    this.cadastroService.editar = value;
  }

  //=============tipo=================
  public get tipo(): number {
    return this.pessoaService.tipo;
  }
  public set tipo(value: number) {
    this.pessoaService.tipo = value;
  }

  async ngOnInit() {
    this.pessoas = await this.pessoaService.listarPessoas();
  }

  cadastrarIdades(pessoa: Pessoa): string {
    var hoje = new Date();
    var idade: number = hoje.getFullYear() - pessoa.dataNascimento.getFullYear();
    //console.log(idade);
    if (idade == 1) {
      return idade.toString() + " Ano"
    }
    return idade.toString() + " Anos"
  }

  EditarCadastro(pessoa: Pessoa): Promise<Pessoa> {

    this.editar = true;
    this.tipo = this.tipoPessoa(pessoa);
   // console.log(this.tipo);
    this.selectedEmitter.emit(pessoa);

    return this.pessoaService.obterPorCPF(pessoa.cpf);
    
  }

  tipoPessoa(pessoa: Pessoa): number {
    if (pessoa instanceof Aluno) {
      this.dataAluno.numeroMatricula = pessoa.numeroMatricula ? pessoa.numeroMatricula : "0000";
      
      return 2;
    }
    if (pessoa instanceof Professor) {
      var vazio: string[];
      this.dataProfessor.especialidade = pessoa.especialidade ? pessoa.especialidade : "null";
      this.dataProfessor.conhecimentos = pessoa.conhecimentos ? pessoa.conhecimentos : vazio;

      return 1;
    }
    return 0;
  }

  async excluirPessoa(pessoa: Pessoa) {
    if(confirm("Tem certeza que quer excluir Pessoa: " + pessoa.nome) ===true)
    {
      var nome: string = pessoa.nome;
      await this.pessoaService.excluirPessoa(pessoa);
      setTimeout(async () => {this.pessoas = [...await this.pessoaService.listarPessoas()];
      }, 500)
      alert(nome +" Excluido Com sucesso!");
    }
  }
}
