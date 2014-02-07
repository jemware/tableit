module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less:{
			development:{
				options: {
					strictMath:true
				},
				files: {
					"css/tableit.css": "less/tableit.less"
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'css/tableit.min.css': [
						'css/tableit.css'
					]
				},
 
				options:{
					report: 'min'
				}
			}
		},

		jshint: {
			options: {
				// eqnull: true,
				// eqeqeq: false,
			},
			beforeconcat: ['tableit.js']
		},

		uglify: {
			build: {
				src: 'tableit.js',
				dest: 'tableit.min.js'
			},
			options: {
				report: 'min'
			}
		},

		watch: {
			options: {
				livereload: true
			},

			scripts: {
				files: ['*.js'],
				tasks: ['jshint:beforeconcat','uglify'],
				options: {
					spawn: false
				}
			},

			css: {
				files: ['less/*.less','less/**/*.less'],
				tasks: ['less:development','cssmin'],
				options: {
					spawn: false
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['jshint:beforeconcat', 'uglify', 'less:development', 'cssmin', 'watch']);
	grunt.registerTask('dev', ['watch']);
};