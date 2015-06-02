
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
				bootstrap: "{FENIX_CDN}/js/bootstrap/3.3.2/js/bootstrap.min",
				amplify:   "{FENIX_CDN}/js/amplify/1.1.2/amplify.min",
				handlebars:"{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
				underscore:"{FENIX_CDN}/js/underscore/1.8.0/underscore.min",
				jsoneditor:"{FENIX_CDN}/js/json-editor/0.7.17/jsoneditor.min"
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
		'js/storeForm',

		'json/contact',

		'text!submodules/fenix-ui-common/html/pills.html',

		'config/services',
		'i18n!nls/questions',

		'domready!'
    ], function ($, _, bootstrap, Handlebars,
    	
    	renderAuthMenu,
    	renderForm,
    	storeForm,

    	schemaContact,

    	tmplPills,

    	Config,
    	Quests
    ) {
    	var authMenu = renderAuthMenu('compile'),
    		user = authMenu.auth.getCurrentUser();

		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>'),
			formStore = new storeForm({
				prefix: user.name || 'unlogged',
				storeExpires: 100000,
				autosaveLoader: '#sectionstorage-loader'
			});

		//CONTACT FORM
		renderForm('#form-contact', {
			schema: schemaContact,			
			values: formStore.getSections('contact'),
			onChange: function(data) {
				formStore.addSection('contact', data);
			}
		});

		//SECTIONS
		var n = 1,
			questions = _.map(Config.sections, function(id) {
				return {
					id: id,
					title: (n++) +') '+ Quests[id],
					html: '',
					active: false
				};
	        });

		$('#pills-quest').html( Handlebars.compile(tmplPills)({
			items: questions
		}) )
		.find('a[data-toggle="tab"]').one('shown.bs.tab', function (e) {
			var id = $(e.target).data('id');


			require(['json/'+ id ], function(schema) {
				
				renderForm('#'+ id, {
					schema: schema,
					values: formStore.getSections(id),
					onChange: function(data) {
						formStore.addSection(id, data);
					}
				});

			}, function (err) {

			    $('#'+id).html( tmplFormError({id: id }) );
			    
			});

		});

    });
});