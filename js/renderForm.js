/*

USAGE:
	renderForm('#form-contact', 'json/schema.contact.json');

	//new dom element
	var form$ = $('<form>').prependTo('body');
	renderForm(form$, 'json/schema.contact.json');

*/
define([
	'require','jquery','underscore','handlebars','jsoneditor',
	'text!html/formWrapper.html'
], function (require, $, _, Handlebars, JSONEditor, formWrapper) {

	function renderForm(target, schema, opts) {

		opts = opts || {};

		var self = this;

		self.opts = _.defaults(opts, {
			theme: 'bootstrap3',
			template: 'handlebars',
			//TODO languages using module nls/jsoneditor_errors.js

			ajax: true,
			editable: false,
			disable_collapse: true,
			disable_edit_json: true,
			disable_properties: true,
			disable_array_reorder: true,
			//required_by_default: true,
			schema: _.isString(schema) ? {$ref: require.toUrl(schema)} : schema,
			//ballbacks
			onSubmit: $.noop
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

		self.target.find('.form-wrapper-submit').on('click', function(e) {
			e.preventDefault();
			self.opts.onSubmit.call(self, self.editor.getValue() );

			//TODO STORAGE
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