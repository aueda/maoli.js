#Maoli.js

[![Bate-papo em https://gitter.im/aueda/maoli.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aueda/maoli.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/aueda/maoli.js.svg?branch=master)](https://travis-ci.org/aueda/maoli.js/)

English version: [README.md](https://github.com/aueda/maoli.js/)

Maoli.js é uma biblioteca em JavaScript para regras de negócios brasileiras comuns (CEP, CPF and CNPJ).

Implementa:

* Validação de CEP
* Validaçao de CPF
* Validacao de CNPJ

Para validação de CEP, CPF e CNPJ em .NET, por favor consulte [Maoli](https://github.com/aueda/maoli/).

## Documentação

### Cep

``Maoli.Cep.validate(cep)`` - valida se uma string é uma representação válida de CEP. Devolve true se o CEP é válido; caso contrário, false.

```JavaScript
	if (window.Maoli.Cep.validate("99999-999"))
	{
	    console.log("CEP is valid");
	}
```

### Cpf

``Maoli.Cpf.validate(cpf)`` - valida se uma string é uma representação válida de CPF. Devolve true se o CPF é válido; caso contrário, false.

```JavaScript
	if (window.Maoli.Cpf.validate("999.999.99-99"))
	{
	    console.log("CPF is valid");
	}
```

### Cnpj

``Maoli.Cnpj.validate(cnpj)`` - valida se uma string é uma representação válida de CNPJ. Devolve true se o CNPJ é válido; caso contrário, false.

```JavaScript
	if (window.Maoli.Cnpj.validate("99.999.999/9999-99"))
	{
	    console.log("CPNJ is valid");
	}
```

## Pacote NuGet

Para instalar o Maoli.js usando o NuGet, execute o seguinte comando na linha de comando do console de Gerenciador de Pacotes:

```
PM> Install-Package Maoli.js
```

## npm Package

Para instalar o Maoli.js usando o npm, execute o seguinte comando na linha de comando:

```
PM> npm install maoli
```

## Código-fonte

O código-fonte está disponível em  [GitHub](https://github.com/aueda/maoli.js/).

## Licença

Este projeto está sob a [licença MIT](http://opensource.org/licenses/MIT).

## Autor

Adriano Ueda [@adriueda](https://twitter.com/adriueda)