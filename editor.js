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
		'js/jsonForm',
		'text!submodules/fenix-ui-common/html/pills.html',
		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars,		
		renderAuthMenu,
		jsonForm,
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

				jsonForm('#form-schema', {
					schema: schema,
					values: values
				});

			});
		});

		$('#add-schema').on('click', function(e) {
			require(['json/schema_fmd'], function (schema) {

				schema.title = " ";
				schema.description = " ";

				jsonForm('#form-schema', {
					schema: schema
				});

			});			
		});

    });
});