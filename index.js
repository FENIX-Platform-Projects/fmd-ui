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

	require([
    	'jquery','underscore','handlebars','amplify',
		'js/renderAuthMenu',
        'config/services'
	], function($, _, Handlebars, amplify,
    	renderAuthMenu,
    	Config
		) {

		renderAuthMenu('index');
	});


});