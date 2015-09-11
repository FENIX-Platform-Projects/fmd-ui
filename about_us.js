require([
    "config/paths",
    "submodules/fenix-ui-menu/js/paths",
    "submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

    menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

    Compiler.resolve([menuConfig], compilerConfig);

    require(['src/renderAuthMenu'], function(renderAuthMenu) {

        renderAuthMenu(true);

	});

});