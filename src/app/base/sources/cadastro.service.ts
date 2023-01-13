import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, map, Observable } from 'rxjs';
import { Pessoa } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class CadastroService
{
  private readonly url: string = "http://10.250.250.108:8084/estagiario";
  //==============EDITAR ORIGINAL===================
  private _editar: boolean;
  public get editar(): boolean {
    return this._editar;
  }
  public set editar(value: boolean) {
    this._editar = value;
  }

  //================CADASTRO ORIGINAL=====================
  private _cadastrar:boolean;
  public get cadastrar(): boolean {
    return this._cadastrar;
  }
  public set cadastrar(value: boolean) {
    this._cadastrar = value;
  }


  constructor(
    private readonly HTTP: HttpClient
    ) { }

  OnInit(){
    this.editar = false;
    this.cadastrar = false;
  }

}
