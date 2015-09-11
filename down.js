require([
	"config/paths",
	"submodules/fenix-ui-menu/js/paths",
	"submodules/fenix-ui-common/js/Compiler"    
], function(compilerConfig, menuConfig, Compiler) {

	menuConfig.baseUrl = "submodules/fenix-ui-menu/js";

	Compiler.resolve([menuConfig], compilerConfig);

	require([
    	'jquery','underscore','handlebars','jsoneditor',
		'src/renderAuthMenu',
        'config/services'
	], function($, _, Handlebars, JsonEditor,
    	renderAuthMenu,
    	Config
		) {

		renderAuthMenu(true);

		function printDoc(doc) {
		    //Wait until PDF is ready to print    
		    if (typeof doc.contentWindow.print === 'undefined') {    
		        setTimeout(function(){printDoc(doc);}, 300);
		    } else {
		        doc.contentWindow.print();
		    }
		}

		var $embed =  $('<iframe id="pdf-embed" style="display:none;position:fixed;top:0;z-index:99999" '+
						'	src="files/questionnaire_20150312.pdf" '+
						'	width="100%" '+
						'	height="100%" '+
						'</iframe>');

		$('#btn-print').on('click', function(e) {
			$embed.appendTo('body');
			printDoc($embed[0]);
		});
        
	});


});