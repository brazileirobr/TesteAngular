import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Aluno } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly url: string = "http://10.250.250.108:8084/estagiario";

  constructor
  (
    private readonly Http: HttpClient
  ) { }

  editarAluno()
  {

  }
  
}

// 10.250.250.108:8084/estagiario

/*
  constructor(
    private readonly http: HttpClient
  ) { }
  obter(aluno: Aluno) {
    this.http.get<any[]>('http://10.10.10.10/alunos/obter', { params: { query: "Paulo" } }).subscribe(r => r ? r.map(v => new Aluno(v)) : null)
  }
*/