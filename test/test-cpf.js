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

            test("Validate Returns False If CPF Is Invalid And Strict", function () {
                ok(maoli.Cpf.validate("825.136.769-32", "strict") === false);
            });
        };

    runCpfTests();

}(this));