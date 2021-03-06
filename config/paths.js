define(function() {

    var FX_CDN = "//fenixrepo.fao.org/cdn";

    return {
        placeholders : {
            FENIX_CDN: FX_CDN
        },
        config: {
            i18n: {
                locale: 'en'
            },
            paths: {
                'text':                        FX_CDN+"/js/requirejs/plugins/text/2.0.12/text",
                'i18n':                        FX_CDN+"/js/requirejs/plugins/i18n/2.0.4/i18n",
                'domready':                    FX_CDN+"/js/requirejs/plugins/domready/2.0.1/domReady",
                'jquery':                      FX_CDN+"/js/jquery/2.1.1/jquery.min",            
                'amplify' :                    FX_CDN+"/js/amplify/1.1.2/amplify.min",
                'backbone':                    FX_CDN+"/js/backbone/1.1.2/backbone.min",
                'underscore':                  FX_CDN+"/js/underscore/1.7.0/underscore.min",
                'underscore-string':           FX_CDN+"/js/underscore-string/3.0.3/underscore.string.min",
                'handlebars':                  FX_CDN+"/js/handlebars/2.0.0/handlebars.min",
                'bootstrap':                   FX_CDN+"/js/bootstrap/3.3.2/js/bootstrap.min",
                'swiper':                      FX_CDN+"/js/swiper/2.7.5/dist/idangerous.swiper.min",
                'jstree':                      FX_CDN+"/js/jstree/3.0.8/dist/jstree.min",
                'chosen':                      FX_CDN+"/js/chosen/1.0.0/chosen.jquery.min",
                'jsoneditor':                  FX_CDN+"/js/json-editor/0.7.23/jsoneditor.min",
                //'jsoneditor':        "lib/json-editor/dist/jsoneditor",
                'sweetalert':                  FX_CDN+"/js/sweet-alert/0.5.0/sweet-alert.min.js",
                'moment':                      FX_CDN+'/js/moment/2.9.0/moment.min',
                'bootstrap-btn':               FX_CDN+"/js/bootstrap-confirm-button/0.0.4/bootstrap-confirm-button.src",
                'bootstrap-datetimepicker':    FX_CDN+"/js/bootstrap-datetimepicker/4.14.30/build/js/bootstrap-datetimepicker.min",

                'fx-common':                   "submodules/fenix-ui-common",
                'fx-common/config/auth_users': "config/auth_users.json",
            },
            shim: {
                'jstree': ['jquery'],
                'swiper': ['jquery'],
                'chosen': ['jquery'],
                'bootstrap': ['jquery'],
                'bootstrap-btn': ['jquery','bootstrap'],
                'bootstrap-datetimepicker': ['jquery','bootstrap','moment'],
                'underscore-string': ['underscore'],
                'underscore': { exports: '_' },            
                'amplify': { deps: ['jquery'], exports: 'amplifyjs' },
                'backbone': {
                    deps: ['jquery', 'underscore'],
                    exports: 'Backbone'
                },
                'jsoneditor': {
                    deps: ['jquery','bootstrap'],
                    exports: 'JSONEditor'
                }
            }
        }
    };
});