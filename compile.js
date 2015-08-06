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
		'js/router',

		'fx-common/js/jsonForm',
		'fx-common/js/storeForm',		

		'fx-common/js/WDSClient',
		'text!fx-common/html/pills.html',

		'json/contact',
		//'json/cat16',

		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars, bootstrapBtn, Amplify,
		
		renderAuthMenu,
		Router,
		
		jsonForm,
		storeForm,

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

		var jsonForms = {};

		window.jsonForms = jsonForms;
		window.formStore = formStore;

		amplify.subscribe('router.edit', function(id) {
			wdsClient.retrieve({
				payload: {
				    query: {'_id': { '$oid': id } }
				},
				success: function(data) {
					console.log('retrieve edit doc', data);
					formStore.storeSections(data[0]);
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

			if(id === 'coll-contact')
				jsonForms['contact'] = new jsonForm('#form-contact', {
					disable_collapse: false,
					schema: schemaContact,			
					startval: formStore.getSections('contact'),
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

				jsonForms[id] = new jsonForm('#'+ id, {
					schema: schema,
					startval: formStore.getSections(id),
					onChange: function(data) {
						
						formStore.addSection(id, data);

						$pill.addClass('saved');
					}
				});

			}, function (err) {
			    $('#'+id).html('<div class="alert alert-warning">Question '+id+' not found</div>');
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

window.jsonForms = jsonForms;

		$('#btn-reset-quest').on('click', function(e) {

			formStore.cleanSections();

			_.each(jsonForms, function(form, id) {
				console.log(id, form);
				form.reset();
			});

		});		

    });
});