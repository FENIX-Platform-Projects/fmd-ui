require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], compilerConfig);


	require(['jquery','underscore','bootstrap','handlebars','bootstrap-btn','amplify',

		'schemas/contact',
		'schemas/definitions',

		'config/services',
		'i18n!nls/questions'
	], function ($, _, bootstrap, Handlebars, bootstrapBtn, Amplify,

		schemaContact,
		schemaDefs,

		Config,
		Quests
	) {

		var SCHEMAPDF = {
			"$schema": "http://json-schema.org/draft-04/schema#",
			"type": "object",
			"definitions": {},
			"properties": {}
		},
		$l = $('#loader'),
		$t = $("#schemaPdf").show();

		SCHEMAPDF.definitions = schemaDefs;
		$l.append('definitions.js ');

		var paths = _.map(Config.sections, function(id) {
			return SCHEMAPDF.properties[id] = Config.dirSchema + id;
		});

		require(paths, function() {

			var schemas = arguments;

			for(var i = 0; i < schemas.length; i++) {
				
				var id = Config.sections[i];

				SCHEMAPDF.properties[id] = schemas[i];

				$l.append(id+'.js ');
			}
			
			$t.text( JSON.stringify(SCHEMAPDF, null, 4) );
		});

		$t.on('click', function(e) {
			$(this).select();
		})

	});

});