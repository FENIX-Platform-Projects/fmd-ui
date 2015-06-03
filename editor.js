
/*global require*/
// relative or absolute path of Components' main.js
require([
	'submodules/fenix-ui-common/js/Compiler',
	'submodules/fenix-ui-menu/js/paths'
], function (Compiler, menuConfig) {

	menuConfig.baseUrl = 'submodules/fenix-ui-menu/js';

	Compiler.resolve([menuConfig], {
	    placeholders: {
	    	FENIX_CDN: "//fenixrepo.fao.org/cdn"
	    },
	    config: {
	    	i18n: {
	        	locale: 'en'
	        },
	        paths: {
				text:      "{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text",
				i18n:      "{FENIX_CDN}/js/requirejs/plugins/i18n/2.0.4/i18n",
				domready:  "{FENIX_CDN}/js/requirejs/plugins/domready/2.0.1/domReady",
				jquery:    "{FENIX_CDN}/js/jquery/2.1.1/jquery.min",
				bootstrap: "{FENIX_CDN}/js/bootstrap/3.2/js/bootstrap.min",
				amplify:   "{FENIX_CDN}/js/amplify/1.1.2/amplify.min",
				handlebars:"{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
				underscore:"{FENIX_CDN}/js/underscore/1.8.0/underscore.min",
				jsoneditor:"{FENIX_CDN}/js/json-editor/0.7.17/jsoneditor"
				//jsoneditor:"submodules/json-editor/dist/jsoneditor"
	        },
	        shim: {

	        	bootstrap:['jquery'],
	            underscore: {
	                exports: '_'
	            },
	            handlebars: {
	                exports: 'Handlebars'
	            },
	            amplify: {
	                deps: ['jquery'],
	                exports: 'amplify'
	            },
	            jsoneditor: {
	                deps: ['jquery', 'bootstrap'],
	                exports: 'JSONEditor'
	            }
	        }
	    }
	});

	// Bootstrap the application
	require([
		'jquery','underscore','bootstrap','handlebars',

		'js/renderAuthMenu',
		'js/renderForm',

		'text!submodules/fenix-ui-common/html/pills.html',
		'config/services',
		'i18n!nls/questions',

		'domready!'
	], function ($, _, bootstrap, Handlebars,
		
		renderAuthMenu,
		renderForm,

		tmplPills,
		Config,
		Quests
	) {

		renderAuthMenu('editor');

		var $list = $('#list-schema');

		_.each(Config.sections, function(cat) {
			$('<option>',{value: cat, text: cat.replace('cat','')+'. '+Quests[cat] }).appendTo($list);
		});

		$list.on('change', function(e) {
			var cat = $(e.target).val();
			
			require(['json/schema_fmd','json/'+cat], function (schema, values) {

				schema.title = " ";
				schema.description = " ";

				renderForm('#form-schema', {
					schema: schema,
					values: values
				});

			});
		});

		$('#add-schema').on('click', function(e) {
			require(['json/schema_fmd'], function (schema) {

				schema.title = " ";
				schema.description = " ";

				renderForm('#form-schema', {
					schema: schema
				});

			});			
		});

    });
});