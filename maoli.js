//
// Maoli.js
// JavaScript helper library for common brazilian business rules
//
// https://github.com/aueda/maoli.js
//
// @author Adriano Ueda
// @version 0.2.5

/*globals
    module
*/
/*jslint
    this
*/
(function (window) {

    "use strict";

    var maoli = window.Maoli || {},

        trim = function (value) {

            var result = value;

            result = (typeof String.prototype.trim !== "function")
                ? value.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                : value.trim();

            return result;
        };

    window.Maoli = maoli;

    maoli.version = "0.2.5";

    maoli.Cep = (function () {
        var regexFlags = "gi",

            regexValidations = {
                loose: "^(\\d{5}-\\d{3}|\\d{8})$",
                strict: "^(\\d{5}-\\d{3})$"
            },

            validate = function (value, punctuation) {
                var regExp = null;

                value = value || "";

                punctuation = punctuation || "loose";

                value = trim(value);

                if (!regexValidations[punctuation]) {
                    return false;
                }

                regExp = new RegExp(regexValidations[punctuation], regexFlags);

                if (!regExp.test(value)) {
                    return false;
                }

                return true;
            };

        return {
            validate: validate
        };
    }());

    maoli.Cpf = (function () {

        var regexFlags = "gi",

            regexValidations = {
                loose: "^(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2})|(\\d{11})$",
                strict: "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$"
            },

            formatIsValid = function (value, punctuation) {
                var regExp = null;

                value = value || "";

                punctuation = punctuation || "loose";

                value = trim(value);

                if (value === "") {
                    return false;
                }

                if (!regexValidations[punctuation]) {
                    return false;
                }

                regExp = new RegExp(regexValidations[punctuation], regexFlags);

                if (!regExp.test(value)) {
                    return false;
                }

                return true;
            },

            sanitize = function (value) {
                var sanitized = trim(value)
                    .toLowerCase()
                    .replace(/\./g, "")
                    .replace(/-/g, "");

                return sanitized;
            },

            createChecksum = function (text) {
                var i = text.length - 1,
                    sum = 0,
                    digit = 0;

                while (i > -1) {
                    sum += parseInt(text.substring(i, i + 1), 10) * (text.length + 1 - i);

                    i -= 1;
                }

                digit = 11 - (sum % 11);

                if (digit === 10 || digit === 11) {
                    digit = 0;
                }

                return digit;
            },

            validate = function (value, punctuation) {

                var inputDigit1 = 0,
                    inputDigit2 = 0,
                    calcDigit1 = 0,
                    calcDigit2 = 0,
                    isValid = false;

                if (!formatIsValid(value, punctuation)) {
                    return isValid;
                }

                value = sanitize(value);

                inputDigit1 = parseInt(value.substring(9, 10), 10);
                inputDigit2 = parseInt(value.substring(10, 11), 10);

                calcDigit1 = createChecksum(value.substring(0, 9));
                calcDigit2 = createChecksum(value.substring(0, 10));

                isValid = inputDigit1 === calcDigit1 && inputDigit2 === calcDigit2;

                return isValid;
            };

        return {
            validate: validate
        };

    }());

    maoli.Cnpj = (function () {

        var multiplier1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            multiplier2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],

            regexFlags = "gi",

            regexValidations = {
                loose: "^(\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}-\\d{2})|(\\d{14})$",
                strict: "^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}-\\d{2}$"
            },

            formatIsValid = function (value, punctuation) {
                var regExp = null;

                value = value || "";

                punctuation = punctuation || "loose";

                value = trim(value);

                if (value === "") {
                    return false;
                }

                if (!regexValidations[punctuation]) {
                    return false;
                }

                regExp = new RegExp(regexValidations[punctuation], regexFlags);

                if (!regExp.test(value)) {
                    return false;
                }

                return true;
            },

            sanitize = function (value) {
                var sanitized = trim(value)
                    .toLowerCase()
                    .replace(/\./g, "")
                    .replace(/-/g, "")
                    .replace(/\//g, "");

                return sanitized;
            },

            createChecksum = function (text, multiplier) {
                var i = text.length - 1,
                    sum = 0,
                    digit = 0,
                    remainder = 0;

                while (i > -1) {
                    sum += parseInt(text.substring(i, i + 1), 10) * multiplier[i];

                    i -= 1;
                }

                remainder = (sum % 11);
                digit = (remainder < 2)
                    ? 0
                    : 11 - remainder;

                return digit;
            },

            validate = function (value, punctuation) {
                var inputDigit1 = 0,
                    inputDigit2 = 0,
                    calcDigit1 = 0,
                    calcDigit2 = 0,
                    isValid = false;

                if (!formatIsValid(value, punctuation)) {
                    return isValid;
                }

                value = sanitize(value);

                inputDigit1 = parseInt(value.substring(12, 13), 10);
                inputDigit2 = parseInt(value.substring(13, 14), 10);

                calcDigit1 = createChecksum(value.substring(0, 12), multiplier1);
                calcDigit2 = createChecksum(value.substring(0, 13), multiplier2);

                isValid = inputDigit1 === calcDigit1 && inputDigit2 === calcDigit2;

                return isValid;
            };

        return {
            validate: validate
        };
    }());

    if (module !== undefined) {
        module.exports = maoli;
    }
}(this));