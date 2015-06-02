define(['jquery','underscore','handlebars','amplify',
], function ($, _, Handlebars, Amplify) {

	function sectionStorage(opts) {
		//TODO extend defaults..

		this.opts = _.defaults(opts, {
			prefix: 'fmd-',
			autosave: true,
			autosaveInterval: 5000,
			autosaveLoader: null,
			storeExpires: 0
		});

		this.storeId = _.uniqueId( this.opts.prefix );
		this.storeObj = amplify.store(this.storeId) || {};
		this.autosaveTimer = null;		
		
		if(this.opts.autosaveLoader)
			$(this.opts.autosaveLoader).css({visibility: 'hidden'});

		if(this.opts.autosave)
			this.initAutoSave();
	};

	sectionStorage.prototype.addSection = function(id, data) {

		this.storeObj[ id ]= data;

		this.storeSections();

		return this;
	};

	sectionStorage.prototype.storeSections = function() {

		console.log('storeSections',this.storeObj)

		var self = this;

		if(_.isEmpty(this.storeObj))
			return this;

		if(this.opts.autosaveLoader)
			$(this.opts.autosaveLoader).css({visibility: 'visible'});

		amplify.store(this.storeId, this.storeObj, {
			expires: this.opts.storeExpires
		});

		setTimeout(function() {
			if(self.opts.autosaveLoader)
				$(self.opts.autosaveLoader).css({visibility: 'hidden'});
		}, 1000);

		return this;
	};

	sectionStorage.prototype.getSections = function() {
		return this.storeObj;
	};

	sectionStorage.prototype.initAutoSave = function() {

		var self = this;

		this.autosaveTimer = setInterval(function() {
			
			self.storeSections();

		}, this.opts.autosaveInterval);

		return this;
	};

	return sectionStorage;
});