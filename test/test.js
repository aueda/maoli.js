(function (maoli) {

    "use strict";

    var looseValidCnpj = "63943315000192",
        looseInvalidCnpj = "32343315/000134",
        strictValidCnpj = "63.943.315/0001-92",
        strictInvalidCnpj = "32.343.315/0001-34";

    test("Validate Returns True If CNPJ Is Valid", function () {
        ok(maoli.Cnpj.validate(looseValidCnpj));
    });

    test("Validate Returns False If CNPJ Is Invalid", function () {
        ok(!maoli.Cnpj.validate(looseInvalidCnpj));
    });
    
    test("Validate Returns False If CNPJ Contains Invalid Chars", function () {
        ok(!maoli.Cnpj.validate("714o256s8"));
    });
    
    test("Validate Returns False If CNPJ Is Valid But Not Strict", function () {
        ok(!maoli.Cnpj.validate(looseValidCnpj, "strict"));
    });

    test("Validate Returns True If CNPJ Is Valid And Strict", function () {
        ok(maoli.Cnpj.validate(strictValidCnpj, "strict"));
    });

    test("Validate Returns False If CNPJ Is Half Punctuated And Valid And Loose", function() {
        ok(maoli.Cnpj.validate("63.9433150001-92", "loose") === false);
    });

}(window.Maoli));

(function (maoli) {

    "use strict";

    var looseValidCpf = "71402565860",
        looseInvalidCpf = "82513676932",
        strictValidCpf = "714.025.658-60",
        strictInvalidCpf = "825.136.769-32";

    test("Validate Returns True If CPF Is Valid", function () {
        ok(maoli.Cpf.validate(looseValidCpf));
    });
    
    test("Validate Returns False If CPF Is Invalid", function () {
        ok(!maoli.Cpf.validate(looseInvalidCpf));
    });

    test("Validate Returns False If CPF Contains Invalid Chars", function () {
        ok(!maoli.Cpf.validate("714o256s8"));
    });

    test("Validate Returns False If CPF Is Valid But Not Strict", function () {
        ok(!maoli.Cpf.validate(looseValidCpf, "strict"));
    });

    test("Validate Returns True If CPF Is Valid And Strict", function () {
        ok(maoli.Cpf.validate(strictValidCpf, "strict"));
    });

    test("Validate Returns False If CPF Is Half Punctuated And Valid And Loose", function() {
        ok(maoli.Cpf.validate("714.025.65860", "loose") === false);
    });

}(window.Maoli));

