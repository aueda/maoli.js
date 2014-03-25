(function (window) {

    "use strict";

    var maoli = window.Maoli,
        test = window.QUnit.test,
        ok = window.QUnit.ok,
        runCepTests = function () {

            test("Validate Returns False If CEP Is Empty", function () {
                ok(!maoli.Cep.validate(""));
            });

            test("Validate Returns True If CEP Is Valid", function () {
                ok(maoli.Cep.validate("12345678"));
            });

            test("Validate Returns True If CEP Is Valid And Has Leading Whitespace", function () {
                ok(maoli.Cep.validate("     12345-678"));
            });

            test("Validate Returns True If CEP Is Valid And Has Trailing Whitespace", function () {
                ok(maoli.Cep.validate("12345-678     "));
            });

            test("Validate Returns True If CEP Is Valid And Has Leading And Trailing Whitespace", function () {
                ok(maoli.Cep.validate("    12345-678     "));
            });

            test("Validate Returns False If CEP Is Null", function () {
                ok(!maoli.Cep.validate(null));
            });

            test("Validate Returns True If CEP Is Valid And Strict", function () {
                ok(maoli.Cep.validate("03451-050"));
            });

            test("Validate Returns False If CEP Is Invalid", function () {
                ok(!maoli.Cep.validate("1ab323"));
            });

            test("Validate Returns False If CEP Is Greater Than 8 Characters", function () {
                ok(!maoli.Cep.validate("1234567890"));
            });

            test("Validate Returns False If CEP Is Invalid and Incomplete", function () {
                ok(!maoli.Cep.validate("12345"));
            });

            test("Validate Returns False If CEP Contains Invalid Chars", function () {
                ok(!maoli.Cep.validate("1234s689"));
            });

            test("Validate Returns False If CEP Is Valid But Not Strict", function () {
                ok(!maoli.Cep.validate("123456", "strict"));
            });

            test("Validate Returns True If CEP Is Valid And Strict", function () {
                ok(maoli.Cep.validate("12345-678", "strict"));
            });
        };

    runCepTests();

}(this));