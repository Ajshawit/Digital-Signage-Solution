module.exports = function(grunt) {
	//Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['src/scss/*.scss', 'src/js/*.js', 'dist/index.html'],
				tasks: ['sass:dev', 'uglify:dev', 'browserSync:dev',]
			},
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'dist/css/main.css' : 'src/scss/main.scss'
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'dist/css/main.css' : 'src/scss/main.scss'
				}
			},
		},
		browserSync: {
		    dev: {
		        bsFiles: {
	            src : ['src/scss/*.scss', 'src/scss/*sass', 'src/js/*.js','dist/index.html']
		        },
						options: {
							watchTask: true,
        			server: {
								baseDir: "/dist/index.html"
        			}
    				},
				},
		},
		uglify: {
		    dev: {
		      	options: {
		        	beautify: true
		      	},
		      	files: {
		        	'dist/js/main.min.js': ['src/js/main.js']
		     	 },
    		},
    		dist: {
		      	options: {
		        	mangle: true
		      	},
		      	files: {
		        	'dist/js/main.min.js': ['src/js/main.js']
		     	},
    		}
		}
	});

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-watch' );
	grunt.loadNpmTasks('grunt-sass' );
	grunt.loadNpmTasks('grunt-browser-sync')
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Register task(s).
	grunt.registerTask('default', ['sass:dev','uglify:dev']);
	grunt.registerTask('dist', ['sass:dist','uglify:dist']);
};
