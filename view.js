
/*global require*/
// relative or absolute path of Components' main.js
require([
	'submodules/fenix-ui-common/js/Compiler',
	'submodules/fenix-ui-menu/js/paths',
	'submodules/fenix-ui-reports/src/js/paths'
], function (Compiler, menuConfig, reportConfig) {

    menuConfig.baseUrl = 'submodules/fenix-ui-menu/js';
    reportConfig.baseUrl = 'submodules/fenix-ui-reports/src/js'

    Compiler.resolve([menuConfig, reportConfig], {
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
				jsoneditor:"{FENIX_CDN}/js/json-editor/0.7.17/jsoneditor.min",
				
				'fx-common': 'submodules/fenix-ui-common'				
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

		'fx-common/js/WDSClient',
		'fx-report',

		'json/search',

		'text!html/questResult.html',

		'config/services',
		'i18n!nls/questions',

		'domready!'
    ], function ($, _, bootstrap, Handlebars,
    	
    	renderAuthMenu,
    	renderForm,
    	storeForm,

    	WDSClient,
    	FenixReport,

    	schemaSearch,

    	questResult,

    	Config,
    	Quests
    ) {

    	console.log('FenixReport',FenixReport);

    	var fenixReport = new FenixReport();

    	fenixReport.init("fmdExport");

    	var authMenu = renderAuthMenu('view'),
    		user = authMenu.auth.getCurrentUser();

		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>'),
			tmplQuestResult = Handlebars.compile(questResult),
			$results = $('#results-search');

		var wdsClient = new WDSClient({
			datasource: Config.dbName
		});

		_.mixin({
		  compactObject: function(o) {
		     var clone = _.clone(o);
		     _.each(clone, function(v, k) {
		       if(!v) {
		         delete clone[k];
		       }
		     });
		     return clone;
		  }
		});

		function downloadPdf(id) {
			fenixReport.exportData({
				input: {
					config: {
						uid: id
					}
				},
				output: {
					config: {
						fileName: "FMD_"+id+".pdf"
					}
				}
			}, Config.reportPdfUrl);
		}

		//SEARCH FORM
		renderForm('#form-search', {
			tmpl: {
				submit: 'Search', reset: 'reset'
			},
			schema: schemaSearch,
			onSubmit: function(data) {

				data = _.compactObject(data);

				console.log('onSubmit', data);

				wdsClient.retrieve({
					collection: Config.dbCollectionData,
					outputType: 'object',
					payload: {
					    query: data,
					    filters: { contact: 1 }
					},
					success: function(data) {
						$results.empty();
						_.each(data, function(quest) {
							$results.append( tmplQuestResult(quest) );
						});
					}
				});
			}
		});

		$results.on('click','.btn-pdf', function(e) {
			e.preventDefault();
			var id = $(e.target).data('id');
			downloadPdf(id);
		});
		
	});
});