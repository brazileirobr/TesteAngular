export class Endereco
{	
	logradouro?: string
	numero?: string
	municipio?: string
	uf?: string
	constructor
	(
		data: any
	)
	{
		this.logradouro= data ? data.endereco.logradouro : 'Rua';
		this.numero= data ? data.endereco.numero : '0000';
		this.municipio= data ? data.endereco.municipio : 'Cidade';
		this.uf= data ? data.endereco.uf : 'DF';
	}
} 
