#Maoli.js

[![Build Status](https://travis-ci.org/aueda/maoli.js.svg?branch=feat-travis-ci)](https://travis-ci.org/aueda/maoli.js/)

Maoli.js is JavaScript helper library for common brazilian business rules (CEP, CPF and CNPJ).

Currently implements:

* CEP validation
* CPF validation
* CNPJ validation

For .NET server-side validation of CEP, CPF and CNPJ, please see [Maoli](https://github.com/aueda/maoli/).

## Documentation

### Cep

``Maoli.Cep.validate(cep)`` - checks if a string value is a valid CEP representation. Returns true if CEP string is valid; false otherwise.

```JavaScript
	if (window.Maoli.Cep.validate("99999-999"))
	{
	    console.log("CEP is valid");
	}
```

### Cpf

``Maoli.Cpf.validate(cpf)`` - checks if a string value is a valid CPF representation. Returns true if CPF string is valid; false otherwise.

```JavaScript
	if (window.Maoli.Cpf.validate("999.999.99-99"))
	{
	    console.log("CPF is valid");
	}
```

### Cnpj

``Maoli.Cnpj.validate(cnpj)`` - checks if a string value is a valid CNPJ representation. Returns true if CNPJ string is valid; false otherwise.

```JavaScript
	if (window.Maoli.Cnpj.validate("99.999.999/9999-99"))
	{
	    console.log("CPNJ is valid");
	}
```

## NuGet Package

To install Maoli.js using NuGet, run the following command in the Package Manager Console:

```
PM> Install-Package Maoli.js
```

## Source Code

Source code is available at [GitHub](https://github.com/aueda/maoli.js/).

## License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Author

Adriano Ueda [@adriueda](https://twitter.com/adriueda)