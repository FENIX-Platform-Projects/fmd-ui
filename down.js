
require(["submodules/fenix-ui-menu/js/paths",
		 "submodules/fenix-ui-common/js/Compiler"
		 ], function(Menu, Compiler) {

    var menuConfig = Menu;
    
    menuConfig['baseUrl'] = "submodules/fenix-ui-menu/js";

    Compiler.resolve([menuConfig], {
        placeholders: {
        	FENIX_CDN: "//fenixrepo.fao.org/cdn"
        },
        config: {
        	i18n: {
            	locale: 'en'
            },
            paths: {
				text: "{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text",
				i18n: "{FENIX_CDN}/js/requirejs/plugins/i18n/2.0.4/i18n",
				domready:  "{FENIX_CDN}/js/requirejs/plugins/domready/2.0.1/domReady",
				jquery:    "{FENIX_CDN}/js/jquery/2.1.1/jquery.min",
				amplify:   "{FENIX_CDN}/js/amplify/1.1.2/amplify.min",
				handlebars:"{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
				underscore:"{FENIX_CDN}/js/underscore/1.8.0/underscore.min",
				jsoneditor:"{FENIX_CDN}/js/json-editor/0.7.17/jsoneditor.min"
            },
            shim: {
                underscore: {
                    exports: '_'
                },
                handlebars: {
                    exports: 'Handlebars'
                },
                amplify: {
                    deps: ['jquery'],
                    exports: 'amplify'
                },
                jsoneditor: {
	                deps: ['jquery', 'bootstrap']
	            }
            }
        }
    });

	require([
    	'jquery','underscore','handlebars','jsoneditor',

		'js/renderAuthMenu',

        'config/services',
		
		'domready!'
	], function($, _, Handlebars, JsonEditor,

    	renderAuthMenu,
    	
    	Config
		) {

		renderAuthMenu('down');

		function printDoc(doc) {
		    //Wait until PDF is ready to print    
		    if (typeof doc.contentWindow.print === 'undefined') {    
		        setTimeout(function(){printDoc(doc);}, 300);
		    } else {
		        doc.contentWindow.print();
		    }
		}

		var $embed =  $('<iframe id="pdf-embed" style="display:none;position:fixed;top:0;z-index:99999" '+
						'	src="down/questionnaire_20150312.pdf" '+
						'	width="100%" '+
						'	height="100%" '+
						'</iframe>');

		$('#btn-print').on('click', function(e) {
			$embed.appendTo('body');
			printDoc($embed[0]);
		});
        
	});


});