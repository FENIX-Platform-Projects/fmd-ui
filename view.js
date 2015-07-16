require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler",
	"submodules/fenix-ui-reports/src/js/paths"
], function(compilerConfig, menuConfig, Compiler, repoConfig) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";
    repoConfig.baseUrl = "submodules/fenix-ui-reports/src/js";

	Compiler.resolve([menuConfig, repoConfig], compilerConfig);

	require([
		'jquery','underscore','bootstrap','handlebars',

		'js/renderAuthMenu',
		'js/jsonForm',
		'js/storeForm',

		'fx-common/js/WDSClient',
		'fx-report',

		'json/search',

		'text!html/questResult.html',

		'config/services',
		'i18n!nls/questions'
    ], function ($, _, bootstrap, Handlebars,
    	
    	renderAuthMenu,
    	jsonForm,
    	storeForm,

    	WDSClient,
    	FenixReport,

    	schemaSearch,

    	questResult,

    	Config,
    	Quests
    ) {

    	var fenixReport = new FenixReport();

    	fenixReport.init("fmdExport");

    	var authMenu = renderAuthMenu(true),
    		user = authMenu.auth.getCurrentUser();

		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>'),
			tmplQuestResult = Handlebars.compile(questResult),
			$results = $('#results-search'),
			$resloading = $results.prev('.loader');

		var wdsClient = new WDSClient({
			datasource: Config.dbName,
			collection: Config.dbCollectionData,
			outputType: 'object'
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

		function downloadPdf(id, filename) {
			fenixReport.exportData({
				input: {
					config: {
						uid: id
					}
				},
				output: {
					config: {
						fileName: filename
					}
				}
			}, Config.reportPdfUrl);
		}

		//SEARCH FORM
		var formSearch = jsonForm('#form-search', {
			tmpl: {
				submit: 'Search', reset: ''
			},
			schema: schemaSearch,
			disabled: ['datefrom','dateto'],
			onSubmit: function(data) {

				data = _.compactObject(data);
				
				if(!_.isEmpty(data))
					data = _.map(data, function(d, k) {
						var f = {};
						f['contact.'+k] = {
							$regex: d,
							$options: 'si'
						};
						return f;
					});
				
				$resloading.show();
				wdsClient.retrieve({
					payload: {
					    query: data[0],
					    filters: { contact: 1 }
					},
					success: function(data) {
						
						$results.empty();
						$resloading.fadeOut(1000);

						_.each(data, function(quest) {
							quest.filename = 'fmd_';
							if(quest.contact && quest.contact.name && quest.contact.date)
								quest.filename += quest.contact.name+'_'+quest.contact.date;
							quest.filename += '.pdf';
							$results.append( tmplQuestResult(quest) );
						});
					}
				});
			}
		});

		$results
		.on('click','.btn-pdf', function(e) {
			e.preventDefault();
			downloadPdf($(e.currentTarget).data('id'), $(e.currentTarget).data('filename'));
		})
		.on('click','.btn-edit', function(e) {
			e.preventDefault();
			//var id = $(e.currentTarget).data('id');
			//TODO reload quest in compile.html
			alert('Edit of questionnaire is temporary disabled');
		})
		.on('click','.btn-del', function(e) {
			e.preventDefault();

			var btn$ = $(e.currentTarget),
				row$ = btn$.parents('.list-group-item'),
				id = btn$.data('id');
			
			wdsClient.delete({
				payload: {
					query: {'_id': { '$oid': id } }
				},
				success: function(data) {
					row$.slideUp();
				}
			});
		});		
	});
});