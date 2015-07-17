define([
    'jquery','underscore','bootstrap','handlebars','backbone'
], function ($, _, bootstrap, Handlebars, Backbone) {

    return function(opts) {

        var callbacks = _.defaults(opts, {
            default: function(path) {
                console.log('route default', path);
            },
            edit: function(id) {
                console.log('route edit', id);
            }
        });

        var router = new (Backbone.Router.extend({

            initialize: function (options) {
                Backbone.history.start();//{pushState: true});
            },

            routes: {
                'edit/:id': callbacks.edit,
                '*path':  callbacks.default
            }

        }));
    };
});