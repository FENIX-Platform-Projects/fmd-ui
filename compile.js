
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
		'js/sectionStorage',

		'json/contact',

		'text!submodules/fenix-ui-common/html/pills.html',

		'config/services',
		'i18n!nls/questions',

		'domready!'
    ], function ($, _, bootstrap, Handlebars,
    	
    	renderAuthMenu,
    	renderForm,
    	sectionStorage,

    	schemaContact,

    	tmplPills,

    	Config,
    	Quests
    ) {
    	var authMenu = renderAuthMenu('compile');


		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>'),
			secStore = new sectionStorage({
				
				//TODO prefix:  auth username

				storeExpires: 100000,
				autosaveLoader: '#sectionstorage-loader'
			});

		//CONTACT FORM
		renderForm('#form-contact', schemaContact, {
			onChange: function(data) {
				secStore.addSection('contact',data);
			}
		}).setValues( secStore.getSections('contact') );

		//SECTIONS
		var n = 1,
			questions = _.map(Config.cats, function(id) {
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
				
				renderForm('#'+ id, schema, {
					onChange: function(data) {
						secStore.addSection(id, data);
					}
				}).setValues( secStore.getSections(id) );

			}, function (err) {

			    $('#'+id).html( tmplFormError({id: id }) );
			    
			});

		});



/*		editor.on("submit",  function() {
		  console.log('submit',arguments);
		});*/

		/*
		$('#form-contact').on('submit', function(e) {
			e.preventDefault();

			var isFormValid = true;

			$(this).find('input').each(function() {
			    if ($.trim($(this).val()).length == 0) {
			        $(this).parent('.form-group').addClass('has-error');
			        isFormValid = false;
			    }
			    else{
			        $(this).parent('.form-group').removeClass('has-error');
			    }
			});

			if(!isFormValid) {
				alert('Please fill in all fields');
				return false;
			}

			var adata = $(this).serializeArray();
			//var data = _.object(_.pluck(adata, 'name'), _.pluck(adata, 'value'));

			$(this).replaceWith( Handlebars.compile('<ul>{{#each this}}<li>{{name}}: {{value}}</li>{{/each}}</ul>')(adata) );
        });*/

    });
});