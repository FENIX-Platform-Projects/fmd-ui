require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], compilerConfig);

	require([
		'jquery','underscore','bootstrap','handlebars','bootstrap-btn','amplify',

		'js/renderAuthMenu',
		'js/jsonForm',
		'js/storeForm',
		'js/router',

		'fx-common/js/WDSClient',
		'text!fx-common/html/pills.html',

		'json/contact',
		//'json/cat16',

		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars, bootstrapBtn, Amplify,
		
		renderAuthMenu,
		jsonForm,
		storeForm,
		Router,		

		WDSClient,
		tmplPills,

		schemaContact,
		Config,
		Quests
	) {

		var authMenu = renderAuthMenu(true),
			user = authMenu.auth.getCurrentUser(),
			username = user.name || 'unlogged',
			language = requirejs.s.contexts._.config.i18n.locale;

		var wdsClient = new WDSClient({
			datasource: Config.dbName,
			collection: Config.dbCollectionData,
			outputType: 'object'
		});

		var formStore = new storeForm({
				prefix: username,
				storeExpires: 100000,
				autosaveLoader: '#sectionstorage-loader'
			});

		var tmplFormError = Handlebars.compile('<div class="alert alert-warning">Question {{id}} not found</div>');

		amplify.subscribe('router.edit', function(id) {
			wdsClient.retrieve({
				payload: {
				    query: {'_id': { '$oid': id } }
				},
				success: function(data) {
					console.log('retrieve edit doc', data);

					formStore.storeSections(data[0]);

					//TODO replace formStore data
				}
			});
		});

		Router({
			edit: function(id) {
				amplify.publish('router.edit', id);
			}
		});

		$('#accordion').on('show.bs.collapse', function (e) {

			var id = $(e.target).attr('id');

			if(id === 'collapse1')
				jsonForm('#form-contact', {
					disable_collapse: false,
					schema: schemaContact,			
					values: formStore.getSections('contact'),
					onChange: function(data) {
						formStore.addSection('contact', data);
					}
				});
		});

		$('#sections').html( Handlebars.compile(tmplPills)({
			items: _.map(Config.sections, function(id) {
				var title = id.replace('cat','')+'. '+ Quests[id]+'<i class="fa fa-check pull-right"></i>';
				return {
					active: false,
					title: title,
					html: '',
					id: id
				};
			})
		}) )
		.find('a[data-toggle="tab"]').one('shown.bs.tab', function (e) {
			
			var $pill = $(e.target),
				id = $pill.data('id');

			require(['json/'+ id ], function(schema) {

				schema.lang = language;

				console.log('form '+id, schema);

				jsonForm('#'+ id, {
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
				$loading = $('#btn-pub-quest-loader');

			if(_.isEmpty(doc)) {
				alert('Attention Questionnaire is Empty!');
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