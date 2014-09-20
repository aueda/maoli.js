module.exports = function (grunt) {

    'use strict';

    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.initConfig({
        qunit: {
            source: ["test/test.html"],
            minified: ["test/test-min.html"]
        }
    });
}