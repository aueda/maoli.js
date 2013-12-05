﻿// ==ClosureCompiler==
// @output_file_name maoli.min.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

(function (window) {

    "use strict";

    var maoli = window.Maoli || {};

    window.Maoli = maoli;

    maoli.version = "0.2.2";

    maoli.Cep = (function () {
        var regexValidations = {
                loose: /^(\d{5}\-\d{3}|\d{8})$/ig,
                strict: /^(\d{5}\-\d{3})$/ig
            },

            validate = function (value, punctuation) {
                var isValid = false;

                punctuation = punctuation || "loose";

                value = value.trim();

                if (!regexValidations[punctuation]) {
                    return false;
                }

                isValid = (new RegExp(regexValidations[punctuation])).test(value);

                return isValid;
            };

        return {
            validate: validate
        };
    }());

    maoli.Cpf = (function () {

        var regexFlags = "gi",

            regexValidations = {
                loose: "^(\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2})|(\\d{11})$",
                strict: "^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$"
            },

            formatIsValid = function (value, punctuation) {
                var regExp = null;

                punctuation = punctuation || "loose";

                if (value.trim() === "") {
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
                var sanitized = value
                    .trim()
                    .toLowerCase()
                    .replace(/\./g, "")
                    .replace(/\-/g, "");

                return sanitized;
            },

            createChecksum = function (text) {
                var i = 0,
                    sum = 0,
                    digit = 0;

                for (i = text.length - 1; i > -1; i -= 1) {
                    sum += parseInt(text.substring(i, i + 1), 10) * (text.length + 1 - i);
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
                loose: "^(\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2})|(\\d{14})$",
                strict: "^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$"
            },

            formatIsValid = function (value, punctuation) {
                var regExp = null;

                punctuation = punctuation || "loose";

                if (value.trim() === "") {
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
                var sanitized = value
                    .trim()
                    .toLowerCase()
                    .replace(/\./g, "")
                    .replace(/\-/g, "")
                    .replace(/\//g, "");

                return sanitized;
            },

            createChecksum = function (text, multiplier) {
                var i = 0,
                    sum = 0,
                    digit = 0,
                    remainder = 0;

                for (i = text.length - 1; i > -1; i -= 1) {
                    sum += parseInt(text.substring(i, i + 1), 10) * multiplier[i];
                }

                remainder = (sum % 11);
                digit = (remainder < 2) ? 0 : 11 - remainder;

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

}(this));