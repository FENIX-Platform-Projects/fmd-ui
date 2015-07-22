//'use strict';

module.exports = function(grunt) {

	var jsonDir = './json/',
		requirejs = require('requirejs');


	grunt.loadNpmTasks('grunt-contrib-clean');


	grunt.initConfig({
		clean: {
			json: {
				src: ['json/jsonschema_pdf.json']
			}
		}
	});

	grunt.registerTask('genschema', 'compile json files', function() {

		var draft = {
			"$schema": "http://json-schema.org/draft-04/schema#",
			"title": "MDSD",
			"description": "D3S 2nd Level Metadata",
			"type": "object",
			"properties": {}
		};

		var files = grunt.file.expand({cwd: jsonDir }, ['cat*']);

		files.sort(function(a, b) {	//natural sort
			return +/\d+/.exec(a)[0] - +/\d+/.exec(b)[0];
		});

		var define = requirejs.define;

		for(var i in files)
		{
			var file = files[i],
				json = grunt.file.read(jsonDir + file);
			
			draft.properties[file] = requirejs.require( eval(json) );
		}

		console.log(draft.properties);

	});

	grunt.registerTask('default', ['clean','genschema']);

};