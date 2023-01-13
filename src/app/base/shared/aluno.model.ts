import { Pessoa } from './pessoa.model';
export class Aluno extends Pessoa 
{
    numeroMatricula: string;

    constructor
        (
            data: any
        )
        {
            if(data)
            {
                //console.log(data);
            }
            super(data);
            this.numeroMatricula = data ? data.numeroMatricula : "";
        }
} 
