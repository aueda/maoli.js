module.exports = function (grunt) {

    "use strict";

    // Execute QUnit unit tests
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Minify files with Google Closure Compiler
    grunt.loadNpmTasks('grunt-closure-compiler');

    grunt.initConfig({
        'closure-compiler': {
            frontend: {
                closurePath: '.',
                js: 'maoli.js',
                jsOutputFile: 'maoli.min.js',
                createSourceMap: 'maoli.min.map',
                sourceMapFormat: 'V3',
                maxBuffer: 500,
                options: {
                    compilation_level: 'SIMPLE_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT'
                }
            }
        },

        qunit: {
            source: ["test/test.html"],
            minified: ["test/test-min.html"]
        }
    });

    grunt.registerTask("default", "closure-compiler");
}