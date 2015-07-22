'use strict';

module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-requirejs');

require()

grunt.initConfig({
	concat: {
		//TODO cut out SearchMarker
		options: {
			banner: '<%= meta.banner %>'
		},
		dist: {
			files: {
				'dist/leaflet-search.src.js': ['src/leaflet-search.js'],			
				'dist/leaflet-search.src.css': ['src/leaflet-search.css'],
				'dist/leaflet-search.mobile.src.css': ['src/leaflet-search.mobile.css']
			}
		}
	}
});

grunt.registerTask('default', [
	'concat'
]);

};