(function (window) {

    "use strict";

    var maoli = window.Maoli,
        test = window.QUnit.test,
        ok = window.QUnit.ok,
        runCepTests = function () {

            test("Validate Returns False If CEP Is Empty", function () {
                ok(!maoli.Cep.validate(""));
            });

            test("Validate Returns True If CEP Is Loose And Valid", function () {
                ok(maoli.Cep.validate("99999999"));
            });

            test("Validate Returns False If CEP Is Loose And Invalid", function () {
                ok(!maoli.Cep.validate("03Sl3392"));
            });

            test("Validate Returns True If CEP Is Strict And Valid", function () {
                ok(maoli.Cep.validate("99999-999", "strict"));
            });

            test("Validate Returns False If CEP Is Strict And Invalid ", function () {
                ok(!maoli.Cep.validate("99999-99X", "strict"));
            });

            test("Validate Returns False If CEP Contains Invalid Chars()", function() {
                ok(!maoli.Cep.validate("999XX-99X"));
            });

            test("Validate Returns False If CEP Is Valid But Not Strict", function () {
                ok(!maoli.Cep.validate("99999999", "strict"));
            });
        };

    runCepTests();

}(this));