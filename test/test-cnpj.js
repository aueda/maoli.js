(function (window) {

    "use strict";

    var maoli = window.Maoli,
        test = window.QUnit.test,
        ok = window.QUnit.ok,
        runCnpjTests = function () {

            test("Validate Returns False If CNPJ Is Empty", function () {
                ok(!maoli.Cnpj.validate(""));
            });

            test("Two calls in a row to Validate must have the same return", function () {
                var returnOne = maoli.Cnpj.validate("63943315000192"),
                    returnTwo = maoli.Cnpj.validate("63943315000192");

                ok(returnOne === returnTwo);
            });

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

            test("Validate Returns False If CNPJ Is Invalid And Strict", function () {
                ok(maoli.Cnpj.validate("32.343.315/0001-34", "strict") === false);
            });
        };

    runCnpjTests();

}(this));