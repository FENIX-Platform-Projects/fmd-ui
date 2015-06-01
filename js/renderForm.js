/*

USAGE:
	renderForm('#form-contact', 'json/schema.contact.json');

	//new dom element
	var form$ = $('<form>').prependTo('body');
	renderForm(form$, 'json/schema.contact.json');

*/
define([
	'require','jquery','underscore','jsoneditor','handlebars',
	'text!html/formWrapper.html'
], function (require, $, _, JSONEditor, formWrapper) {

	function renderForm(target, schema, opts) {

		opts = opts || {};

		this.opts = _.defaults(opts, {
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
			schema: _.isString(schema) ? {$ref: require.toUrl(schema)} : schema
		});

		if(!_.isUndefined(opts.editable))
			this.opts = _.extend(this.opts, {
				editable:              opts.editable,
				disable_collapse:     !opts.editable,
				disable_edit_json:    !opts.editable,
				disable_properties:   !opts.editable,
				disable_array_reorder:!opts.editable
			});

		this.target = (target instanceof jQuery) ? target : $(target);
		
		//this.wrapper = $(formWrapper);

		//this.wrapper.insertBefore(this.target);

		//this.wrapper.find('.form-wrapper-content').append(this.target);

		this.editor = new JSONEditor(this.target[0], this.opts);

		return this;
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