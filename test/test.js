(function (window) {

    "use strict";

    var maoli = window.Maoli,
        test = window.QUnit.test,
        ok = window.QUnit.ok,
        runCnpjTests = function () {

            test("Validate Returns True If CNPJ Is Valid", function () {
                ok(maoli.Cnpj.validate("63943315000192"));
            });

            test("Validate Returns False If CNPJ Is Invalid", function () {
                ok(!maoli.Cnpj.validate("32343315/000134"));
            });

            test("Validate Returns False If CNPJ Contains Invalid Chars", function () {
                ok(!maoli.Cnpj.validate("714o256s8"));
            });

            test("Validate Returns False If CNPJ Is Valid But Not Strict", function () {
                ok(!maoli.Cnpj.validate("63943315000192", "strict"));
            });

            test("Validate Returns True If CNPJ Is Valid And Strict", function () {
                ok(maoli.Cnpj.validate("63.943.315/0001-92", "strict"));
            });

            test("Validate Returns False If CNPJ Is Half Punctuated And Valid And Loose", function () {
                ok(maoli.Cnpj.validate("63.9433150001-92", "loose") === false);
            });
        };

    runCnpjTests();

}(this));

(function (window) {

    "use strict";

    var maoli = window.Maoli,
        test = window.QUnit.test,
        ok = window.QUnit.ok,
        runCpfTests = function () {

            test("Validate Returns True If CPF Is Valid", function () {
                ok(maoli.Cpf.validate("71402565860"));
            });

            test("Validate Returns False If CPF Is Invalid", function () {
                ok(!maoli.Cpf.validate("82513676932"));
            });

            test("Validate Returns False If CPF Contains Invalid Chars", function () {
                ok(!maoli.Cpf.validate("714o256s8"));
            });

            test("Validate Returns False If CPF Is Valid But Not Strict", function () {
                ok(!maoli.Cpf.validate("71402565860", "strict"));
            });

            test("Validate Returns True If CPF Is Valid And Strict", function () {
                ok(maoli.Cpf.validate("714.025.658-60", "strict"));
            });

            test("Validate Returns False If CPF Is Half Punctuated And Valid And Loose", function () {
                ok(maoli.Cpf.validate("714.025.65860", "loose") === false);
            });
        };

    runCpfTests();

}(this));