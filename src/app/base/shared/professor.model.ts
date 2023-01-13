import { Pessoa } from './pessoa.model';
export class Professor extends Pessoa 
{
    especialidade: string;
    conhecimentos: string[];

    constructor
        (
            data: any
        ) 
        {

            super(data);
            this.especialidade = data ? data.especialidade : "";
            this.conhecimentos = data ? data.conhecimentos : [];
        }
}

/*
 private _nome;
    public get nome() {
        return this._nome;
    }
    public set nome(value) {
        this._nome = value;

    }

     constructor
        (
            dados: any,
            // public pessoa?: Pessoa,
            // public materia?: string
        ) {
        this.nome = dados.nome ? new Date(dados.nome) : undefined
        // Object.assign(this, dados);
        // this.profs = dados.profs.map(p => new Prof(p));
    }


      toJSON() {
        return { nome: this._nome }
    }

*/