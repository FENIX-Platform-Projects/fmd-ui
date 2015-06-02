/*

USAGE:
	renderForm('#form-contact', 'json/schema.contact.json');

	//new dom element
	var form$ = $('<form>').prependTo('body');
	renderForm(form$, 'json/schema.contact.json');

*/
define([
	'require','jquery','underscore','handlebars','jsoneditor',
	//'fmdTheme',
	'text!html/formWrapper.html'
], function (require, $, _, Handlebars, JSONEditor, 
	//FMDTheme,
	formWrapper) {

	function renderForm(target, opts) {

		opts = opts || {};

		var self = this;

		self.opts = _.defaults(opts, {
			template: 'handlebars',
			theme: 'bootstrap3',			
			//TODO languages using module nls/jsoneditor_errors.js

			ajax: true,
			editable: false,
			disable_collapse: true,
			disable_edit_json: true,
			disable_properties: true,
			disable_array_reorder: true,
			
			values: {},
			schema: _.isString(opts.schema) ? {$ref: require.toUrl(opts.schema)} : opts.schema,
			
			//ballbacks
			onChange: $.noop
		});

		if(!_.isUndefined(opts.editable))
			self.opts = _.extend(self.opts, {
				editable:              opts.editable,
				disable_collapse:     !opts.editable,
				disable_edit_json:    !opts.editable,
				disable_properties:   !opts.editable,
				disable_array_reorder:!opts.editable
			});

		self.target = (target instanceof jQuery) ? target : $(target);
		
		self.target.html(formWrapper);

		self.editor = new JSONEditor(self.target.find('.form-wrapper-content')[0], self.opts);

		if(!_.isEmpty(self.opts.values))
			self.editor.setValue(self.opts.values);

		self.editor.on('change', function(e) {
			self.opts.onChange.call(self, self.editor.getValue() );
		});

		self.target.find('.form-wrapper-submit').on('click', function(e) {
			e.preventDefault();
			self.opts.onChange.call(self, self.editor.getValue() );
		});

		return self;
	};

	renderForm.prototype.setValues = function(data) {
		
		if(_.isObject(data))
			this.editor.setValue(data);

		return this;
	};

	return function (target, schemaUrl, opts) {
		return new renderForm(target, schemaUrl, opts);
	}
});