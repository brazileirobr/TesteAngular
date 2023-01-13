import { Endereco } from "./endereco.model";
import { FromDateString } from "./fromdatetring";

export class Pessoa {
	cpf: string;
	nome: string;
	dataNascimento: Date;
	endereco: Endereco;

	constructor
		(
			data?: any
		) {

		this.cpf = data ? data.cpf : "";
		this.nome = data ? data.nome : "";
		this.dataNascimento = data && data.dataNascimento ? FromDateString(data.dataNascimento) : undefined;
		this.endereco = new Endereco(data);
	}
} 
