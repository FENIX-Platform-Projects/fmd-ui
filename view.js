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
		'jquery','underscore','handlebars','bootstrap','bootstrap-btn',

		'src/renderAuthMenu',
		
		'fx-common/js/jsonForm',
		'fx-common/js/storeForm',

		'fx-common/js/WDSClient',
		'fx-report',

		'schemas/search',

		'text!html/questResult.html',

		'config/services',
		'i18n!nls/questions'
    ], function ($, _, Handlebars, bootstrap, bootstrapBtn,
    	
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
    	renderAuthMenu(true);

		var tmplQuestResult = Handlebars.compile(questResult),
			$tmplAlert = $(Handlebars.compile('<div class="alert alert-warning">{{text}}</div>')),
			$results = $('#results-search'),
			$resloading = $results.prev('.loader');

		var wdsClient = new WDSClient({
			datasource: Config.dbName,
			collection: Config.dbCollectionData,
			outputType: 'object'
		});

    	var fenixReport = new FenixReport();

		var jsonForms = {};

		window.jsonForms = jsonForms;

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

		//SEARCH FORM
		jsonForms['search'] = new jsonForm('#form-search', {
			tmpl: {
				submit: 'Search',
				reset: 'Reset'
			},
			schema: schemaSearch,
			onReset: function() {
				$results.empty();
			},
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

							var $row = $(tmplQuestResult(quest)).appendTo($results);

							$row.find('.btn-del').btsConfirmButton({
								className: '.btn-primary',
								msg: 'Confirm'
							}, function(e) {
					
								var $btn = $(e.currentTarget),
									id = $btn.data('id');
								
								wdsClient.delete({
									payload: {
										query: {'_id': { '$oid': id } }
									},
									success: function(data) {
										$row.slideUp();
									}
								});
							});	
						});
					}
				});
			}
		});

		$results
		.on('click','.btn-pdf', function(e) {
			e.preventDefault();
    		fenixReport.init('fmdExport');			
			fenixReport.exportData({
				input: {
					config: {
						uid: $(e.currentTarget).data('id'),
						urlSchema: Config.reportPdfUrlSchema
					}
				},
				output: {
					config: {
						fileName: $(e.currentTarget).data('filename')
					}
				}
			}, Config.reportPdfUrl);
		});
	});
});