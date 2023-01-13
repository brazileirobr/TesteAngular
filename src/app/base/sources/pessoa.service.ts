import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, map, Observable } from 'rxjs';

import { Aluno, Pessoa, Professor } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly url: string = "http://10.250.250.108:8084/estagiario";
  private _pessoaAtual: Pessoa;
  private _tipo: number;
  private _pessoas: Pessoa[];

  //=============LISTA DE PESSOAS ORIGINAL=================
  public get pessoas(): Pessoa[] {
    return this._pessoas;
  }
  public set pessoas(value: Pessoa[]) {
    this._pessoas = value;
  }

  //===========data aluno ORIGINAL============
  private _dataAluno: { numeroMatricula: string; } = { numeroMatricula: "" };
  public get dataAluno(): { numeroMatricula: string; } {
    return this._dataAluno;
  }
  public set dataAluno(value: { numeroMatricula: string; }) {
    this._dataAluno = value;
  }

  //===============data professor ORIGINAL==========================
  private _dataProfessor: { especialidade: string; conhecimentos: string[]; } = { especialidade: "", conhecimentos: [""]};;
  public get dataProfessor(): { especialidade: string; conhecimentos: string[]; } {
    return this._dataProfessor;
  }
  public set dataProfessor(value: { especialidade: string; conhecimentos: string[]; }) {
    this._dataProfessor = value;
  }

  //=================PESSOA ORIGINAL==============
  public get pessoaAtual(): Pessoa {
    return this._pessoaAtual;
  }
  public set pessoaAtual(value: Pessoa) {
    this._pessoaAtual = value;
  }

  //=================TIPO ORIGINAL==============
  public get tipo(): number {
    return this._tipo;
  }
  public set tipo(value: number) {
    this._tipo = value;
  }

  constructor(
    private readonly HTTP: HttpClient) { }

  OnInit() {
    this.tipo = 0;
    this.pessoaAtual = undefined;
    this.dataAluno.numeroMatricula = "";
    this.dataProfessor.especialidade = "";
    var vazio: string[];
    this.dataProfessor.conhecimentos = vazio;
  }

  async listarPessoas(): Promise<Pessoa[]> {
    return await firstValueFrom(this.HTTP.get<any[]>(this.url + '/api/pessoa/obterLista')
      .pipe(map((data) => data ? data.map(v => !v.especialidade ? new Aluno(v) : new Professor(v)) : null))
    );
  }
  async obterPorCPF(cpf: string): Promise<Pessoa> {
    return await firstValueFrom(this.HTTP.get<any>
      (this.url + '/api/pessoa/obterPorCpf?cpf=' + cpf).pipe(map(
        (data) => data ? (data.especialidade ? new Aluno(data) : new Professor(data)) : null)));
  }

  async atualizarProfessor(pessoa: Pessoa) {
    this.HTTP.post<any>(this.url + "/api/professor/alterar", pessoa).subscribe();
  }

  async atualizarAluno(pessoa: Pessoa) {
    this.HTTP.post<void>(this.url + "/api/aluno/alterar", pessoa).subscribe();
  }

  cadastrarPessoa(pessoa: Pessoa):void
  {
    if(pessoa instanceof Professor)
    {
      pessoa.especialidade = this.dataProfessor.especialidade ? this.dataProfessor.especialidade : "";
      pessoa.conhecimentos = this.dataProfessor.conhecimentos ? this.dataProfessor.conhecimentos : [""];
      
      this.HTTP.post<any>(this.url + "/api/professor/manter", pessoa).subscribe();   
    }

    if(pessoa instanceof Aluno)
    {
      pessoa.numeroMatricula = this.dataAluno.numeroMatricula ? this.dataAluno.numeroMatricula : "";
      
      this.HTTP.post<any>(this.url + "/api/aluno/manter", pessoa).subscribe();   
    }
  }

  excluirPessoa(pessoa:Pessoa)
  {  
      this.HTTP.post<any>(this.url + "/api/pessoa/excluir", pessoa).subscribe();   
  }
}

// 10.250.250.108:8084/estagiario
/*
  constructor(
    private readonly http: HttpClient
  ) { }
  obter(aluno: Aluno) {
    this.http.get<any[]>('http://10.10.10.10/alunos/obter', { 
      params: { query: "Paulo" } }).subscribe(r => r ? r.map(v => new Aluno(v)) : null)
  }
*/