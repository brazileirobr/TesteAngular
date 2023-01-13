import { Component, Input , OnInit} from '@angular/core';
import { Aluno, Pessoa, Professor } from '../shared';
import { CadastroService, PessoaService } from '../sources';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  
  template: '<input [textMask]="{mask: mask}" type="text"/>'
})

export class CadastroComponent {
  conhecimentotemporario : string;

  @Input()
  //pessoa: Pessoa;

  //===============PESSOA==================
  public get pessoa(): Pessoa {
    return this.pessoaService.pessoaAtual;
  }
  public set pessoa(value: Pessoa) {
    this.pessoaService.pessoaAtual = value;
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

  constructor
  (
    private pessoaService: PessoaService,
    private cadastroService : CadastroService
  
  ) { }

  //===============EDITAR===============
  public get editar(): boolean {
    return this.cadastroService.editar;
  }
  public set editar(value: boolean) {
    this.cadastroService.editar = value;
  }

  //================CADASTRO==================
  public get cadastro(): boolean {
    return this.cadastroService.cadastrar;
  }
  public set cadastro(value: boolean) {
    this.cadastroService.cadastrar = value;
  }

  //=================TIPO==============
  public get tipo(): number {
    return this.pessoaService.tipo;
  }
  public set tipo(value: number) {
    this.pessoaService.tipo = value;
  }


  ngOnInit(){ }

  busqueConhecimento()
  {
    this.dataProfessor.conhecimentos.push(this.conhecimentotemporario);
    for(let item of this.dataProfessor.conhecimentos)
    {
      if(item === "")
      {
        this.dataProfessor.conhecimentos.splice(this.dataProfessor.conhecimentos.indexOf(item), 1);
      }
    }
    
    this.conhecimentotemporario = "";
  }
  
  async verificarCpf(cpfcampo : string)
  {
    const pessoas: Pessoa[] = await this.pessoaService.listarPessoas();
    
    for(let pes of pessoas)
    {
      if(cpfcampo === pes.cpf)
      {
        alert("CPF JÁ CADASTRADO COMO : " + pes.nome)

        if(confirm("Gostaria de Editar: " + pes.nome))
        {
          this.novaEdicao(pes);
        }
        else
        {
          this.cadastro = false;
          this.pessoa = undefined;
          return;
        }
      }
    }
  }
  
  novaEdicao(pessoa:Pessoa)
  {
    this.pessoa = undefined;
    this.cadastro = false;
    this.editar = false;
    if(pessoa instanceof Professor)
    {
      this.tipo = 1;
    }
    if(pessoa instanceof Aluno)
    {
      this.tipo = 2;
    }
    setTimeout(async () => 
    {  
       this.pessoa = pessoa;
       this.editar = true;
    }, 50)
    
    this.dataAluno.numeroMatricula = "0000";
    var vazio: string[];
    this.dataProfessor.especialidade =  "null";
    this.dataProfessor.conhecimentos = vazio;    
  }

  inquisicao(excluir: string)
  {
    const index= this.dataProfessor.conhecimentos.indexOf(excluir);

    if(index > -1)
    {
      this.dataProfessor.conhecimentos.splice(index, 1);
    }
  }
}

//{{pessoa | json}}

/*

    */