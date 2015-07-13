require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(Paths, menuConfig, Compiler) {

	menuConfig['baseUrl'] = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], {
		placeholders : {
			FENIX_CDN: Paths.FENIX_CDN
		},
		config: Paths
	});

	// Bootstrap the application
	require([
		'jquery','underscore','bootstrap','handlebars',

		'js/renderAuthMenu',
		'js/renderForm',

		'text!submodules/fenix-ui-common/html/pills.html',
		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars,
		
		renderAuthMenu,
		renderForm,

		tmplPills,
		Config,
		Quests
	) {

		renderAuthMenu(true);

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