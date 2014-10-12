/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(grunt) {

	grunt.config.set('bower', {
		install: {
			options: {
				targetDir: './assets/vendor',
				layout: 'byType',
				install: true,
				verbose: false,
				cleanTargetDir: true,
				cleanBowerDir: true,
				bowerOptions: {}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
};
