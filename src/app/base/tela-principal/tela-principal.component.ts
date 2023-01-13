import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno, Pessoa, Professor } from '../shared';
import { CadastroService, PessoaService } from '../sources';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {

   //=================LISTA DE PESSOAS =========
   public get pessoas(): Pessoa[] {
    return this.pessoaService.pessoas;
  }
  public set pessoas(value: Pessoa[]) {
    this.pessoaService.pessoas = value;
  }
  //===================DATA ALUNO=================
  public get dataAluno():{ numeroMatricula: string; } 
  {
    return this.pessoaService.dataAluno;
  }
  public set dataAluno(value: { numeroMatricula: string; }) 
  {
    this.pessoaService.dataAluno = value;
  }

  
  //===================DATA PROFESSOR=================
  public get dataProfessor(): { especialidade: string; conhecimentos: string[]; }
  {
    return this.pessoaService.dataProfessor;
  }
  public set dataProfessor(value: { especialidade: string; conhecimentos: string[]; }) 
  {
    this.pessoaService.dataProfessor = value;
  }

  //============CADASTRO================
  public get cadastro(): boolean {
    return this.cadastroService.cadastrar;
  }
  public set cadastro(value: boolean) {
    this.cadastroService.cadastrar = value;
  }

  //============EDITAR================
  public get editar(): boolean {  
  return this.cadastroService.editar;
  }
  public set editar(value: boolean) {
    this.cadastroService.editar = value;
  }

  //============TIPO================
  public get tipo(): number {
    return this.pessoaService.tipo;
  }
  public set tipo(value: number) {
    this.pessoaService.tipo = value;
  }

  //============PESSOA================
  public get pessoa(): Pessoa {
    return this.pessoaService.pessoaAtual;
  }
  public set pessoa(value: Pessoa) {
    this.pessoaService.pessoaAtual = value;
  }

  constructor(
    private pessoaService: PessoaService,
    private cadastroService: CadastroService) { }

  async cadastrarNovo(tipo: number)
  {
    this.cadastro = true;
    this.editar = false;
    var data :{};
    this.tipo = tipo;
    
    if(this.tipo == 1)
    {
      this.pessoa = new Professor(data);
    }
    else
    {
      this.pessoa = new Aluno(data);
    }

    this.pessoas = await this.pessoaService.listarPessoas();
    
  }

  async salvarCadastro(pessoa: Pessoa)
  {
    this.cadastro = false;
    this.pessoa = pessoa;
  
    await this.pessoaService.cadastrarPessoa(pessoa);
    setTimeout(async () => {
      alert(this.pessoa.nome + " Cadastrado Com Sucesso!");
      this.pessoa = undefined;
      this.pessoas = await this.pessoaService.listarPessoas();
    }, 500)
  
  }

  async salvarEdicao(pessoa: Pessoa = this.pessoaService.pessoaAtual) {
    //console.log(pessoa)
    this.cadastro = false;


    if (pessoa instanceof Aluno) {
      pessoa.numeroMatricula = this.dataAluno.numeroMatricula;

      this.pessoaService.atualizarAluno(pessoa);
      //console.log("Aluno");
      this.editar=false;
    }

    if (pessoa instanceof Professor) {
      pessoa.especialidade = this.dataProfessor.especialidade;
      pessoa.conhecimentos = this.dataProfessor.conhecimentos;

      this.pessoaService.atualizarProfessor(pessoa);
      //console.log("Professor");
      this.editar=false;
    }

    setTimeout(async () => {
      alert(this.pessoa.nome + " Editado Com Sucesso!");
      this.pessoa = undefined;   
      this.pessoas = [...await this.pessoaService.listarPessoas()];
    }, 500)
  }
  
  async cancelarEdicao()
  {
    setTimeout(async () => {
      this.pessoas = await this.pessoaService.listarPessoas();
      
      this.pessoa = undefined;

      this.editar=false;
      
      this.cancelarData();
    }, 50)      
  }

  async cancelarCadastro()
  {
    setTimeout(async () => {
      this.pessoas = await this.pessoaService.listarPessoas();
      
      this.pessoa = undefined;

      this.cadastro=false;
      
      this.cancelarData();
    }, 50)
  }

  cancelarData()
  {
      this.dataAluno.numeroMatricula = "0000";
      var vazio: string[];
      this.dataProfessor.especialidade =  "null";
      this.dataProfessor.conhecimentos = vazio;
  }
}
