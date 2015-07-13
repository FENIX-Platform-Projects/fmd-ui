require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], compilerConfig);

	require([
		'jquery','underscore','bootstrap','handlebars',

		'js/renderAuthMenu',
		'js/renderForm',
		'js/storeForm',

		'fx-common/js/WDSClient',
		'text!fx-common/html/pills.html',

		'json/contact',
		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars,
		
		renderAuthMenu,
		renderForm,
		storeForm,

		WDSClient,
		tmplPills,

		schemaContact,
		Config,
		Quests
	) {
		var authMenu = renderAuthMenu(true),
			user = authMenu.auth.getCurrentUser(),
			username = user.name || 'unlogged';

		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>'),
			formStore = new storeForm({
				prefix: username,
				storeExpires: 100000,
				autosaveLoader: '#sectionstorage-loader'
			});

		var wdsClient = new WDSClient({
			datasource: Config.dbName
		});

		//CONTACT FORM
		schemaContact.title = ' ';
		
		renderForm('#form-contact', {
			schema: schemaContact,			
			values: formStore.getSections('contact'),
			onChange: function(data) {
				formStore.addSection('contact', data);
			}
		});
		
		//SECTIONS
		var questions = _.map(Config.sections, function(id) {
				var n = id.replace('cat','');
				return {
					id: id,
					title: n+'. '+ Quests[id]+'<i class="fa fa-check pull-right"></i>',
					html: '',
					active: false
				};
	        });

//DEBUG GEN JSON SCHEMAS
//window.schemaAll = {};

		$('#pills-quest').html( Handlebars.compile(tmplPills)({
			items: questions
		}) )
		.find('a[data-toggle="tab"]').one('shown.bs.tab', function (e) {
			
			var $pill = $(e.target),
				id = $pill.data('id');

			require(['json/'+ id ], function(schema) {
				
				//DEBUG GEN JSON SCHEMAS
				//window.schemaAll[id]= schema;

				renderForm('#'+ id, {
					schema: schema,
					values: formStore.getSections(id),
					onChange: function(data) {
						formStore.addSection(id, data);
						$pill.addClass('saved');
					}
				});

			}, function (err) {
			    $('#'+id).html( tmplFormError({id: id }) );
			});
		});

		$('#btn-pub-quest').on('click', function(e) {
			
			var doc = formStore.getSections();
				$loading = $(this).next('.loader');

			if(_.isEmpty(doc)) {
				alert('Questionnaire is Empty!');
				return false;
			}

			$loading.show();
			wdsClient.create({
				collection: Config.dbCollectionData,
				outputType: 'object',
				payload: {
				    query: [ doc ]
				},
				success: function(jsonIds) {
				    $loading.fadeOut(2000);
				}
			});
		});

    });
});