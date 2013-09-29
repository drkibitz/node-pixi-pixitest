module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        // Configure values
        bundle: {
            pixitest: 'pixitest.js'
        },

        // Configure tasks

        // grunt-browserify
        browserify: {
            pixitest: {
                options: {
                    standalone: 'pixitest'
                },
                files: {
                    '<%= bundle.pixitest %>': ['pixitest/index.js']
                }
            }
        },
        // grunt-contrib-concat
        concat: {
            options: {
                separator: "\n\n",
            },
            pixitest: {
                files: {
                    '<%= bundle.pixitest %>': [
                        'node_modules/chai/chai.js',
                        'lib/resemble.js',
                        '<%= bundle.pixitest %>'
                    ]
                }
            }
        },
        // grunt-contrib-jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'index.js',
                'pixitest/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // grunt
    grunt.registerTask('default', ['jshint', 'browserify', 'concat']);
};
