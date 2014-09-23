/*globals
    module
*/

(function () {

    "use strict";

    if (module === undefined) {
        return;
    }

    module.exports = function (grunt) {

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
                    maxBuffer: 500,
                    options: {
                        compilation_level: 'SIMPLE_OPTIMIZATIONS',
                        language_in: 'ECMASCRIPT5_STRICT',
                        create_source_map: 'maoli.min.map',
                        source_map_format: 'V3'
                    }
                }
            },

            qunit: {
                source: ["test/test.html"],
                minified: ["test/test-min.html"]
            }
        });

        grunt.registerTask("minify", "closure-compiler");

        grunt.registerTask("test", "qunit");

        grunt.registerTask("default", ["minify", "test"]);
    };
}());
