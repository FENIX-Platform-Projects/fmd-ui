require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], compilerConfig);

	require([
		'jquery','underscore','bootstrap','handlebars','bootstrap-btn','amplify',

		'src/renderAuthMenu',
		'src/router',

		'fx-common/js/jsonForm',
		'fx-common/js/storeForm',

		'fx-common/js/WDSClient',
		'text!fx-common/html/pills.html',
		'text!html/questHead.html',

		'schemas/contact',

		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars, bootstrapBtn, Amplify,
		
		renderAuthMenu,
		Router,
		
		jsonForm,
		storeForm,

		WDSClient,
		tmplPills,
		tmplHead,

		schemaContact,

		Config,
		Quests
	) {

		var authMenu = renderAuthMenu(true);

		var wdsClient = new WDSClient({
			datasource: Config.dbName,
			collection: Config.dbCollectionData,
			outputType: 'object'
		});

		var formStore = new storeForm({
				prefix: authMenu.username,
				storeExpires: 100000,
				autosaveLoader: '#sectionstorage-loader'
			});

		var currentQuestId = null;

		var jsonForms = {};

		Router({
			default: function() {
				showQuestDetail();
			},
			edit: function(id) {
				
				currentQuestId = id;

				var that = this;
				wdsClient.retrieve({
					payload: {
						query: {'_id': { '$oid': id } }
					},
					success: function(data) {
						formStore.storeSections( data[0] );
						showQuestDetail( data[0] );
						that.always();
					}
				});				
			},
			always: function(path) {

				var data = formStore.getSections();
				showQuestDetail( data );

				$('#sections').find('a[data-toggle="tab"]').each(function() {
					var $pill = $(this),
						id = $pill.data('id');

					if(data[id])
						$pill.addClass('saved');
					else
						$pill.removeClass('saved');
				});
			}
		});

		function showQuestDetail(data) {

			if(_.isEmpty(data)) {
				$('body').addClass('page-new');
				$('body').removeClass('page-edit');
				$('#quest-head').html('');
				$('#alertnotpub').show();
			}
			else {
				$('body').addClass('page-edit');
				$('body').removeClass('page-new');
				$('#quest-head').html(Handlebars.compile(tmplHead)(data.contact));		
				$('#alertnotpub').hide();
			}
		}

		$('#accordion').on('show.bs.collapse', function (e) {
			
			var id = $(e.target).attr('id');

			if(id === 'coll-contact') {
				jsonForms.contact = new jsonForm('#form-contact', {
					disable_collapse: false,
					schema: schemaContact,
					values: formStore.getSections('contact'),
					onChange: function(data) {
						formStore.addSection('contact', data);
					},
					onReset: function(data) {
						formStore.removeSection('contact');
					},
					onSubmit: function(data) {
						showQuestDetail({contact: data});
					}
				});
			}
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

			require([Config.dirSchema + id ], function(schema) {

				schema.lang = authMenu.lang;

				jsonForms[id] = new jsonForm('#'+id, {
					schema: schema,
					values: formStore.getSections(id),
					onChange: function(data) {
						formStore.addSection(id, data);
					},
					onSubmit: function(data) {
						$pill.addClass('saved');
					},
					onReset: function(data) {
						formStore.removeSection(id);
						$pill.removeClass('saved');
					}
				});

			}, function (err) {
			    $('#'+id).html('<div class="alert alert-warning">Question '+id+' not found</div>');
			});
		});

		$('#btn-pub-quest').on('click', function(e) {
			
			var doc = formStore.getSections(),
				$loading = $('#btn-pub-quest-loader'),
				payload;

			if(_.isEmpty(doc)) {
				alert('Attention Questionnaire is Empty!');
				return false;
			}

			doc.username = authMenu.username;

			if(currentQuestId) {
				wdsAction = 'update';
				payload = {
				    query: {'_id': { '$oid': currentQuestId } },
				    update: doc
				};
			}
			else
			{
				wdsAction = 'create';
				payload = {
				    query: [ doc ]
				};
			}
			
			$loading.show();
			wdsClient[ wdsAction ]({
				collection: Config.dbCollectionData,
				payload: payload,
				success: function() {
					showQuestDetail();
				    $loading.fadeOut(2000);
				}
			});
		});

		$('#btn-reset-quest').on('click', function(e) {

			formStore.cleanSections();

			_.each(jsonForms, function(form, id) {
				form.reset();
			});
			
			$('#sections .nav-pills a').removeClass('saved');

			showQuestDetail({});
		});		

    });
});