define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat12'],
		"properties": {
			"ask32": {
				"title": Quests['ask32'],
				"$ref": "#/definitions/yesno"
			},
			"ask32_1": {
				"title": Quests['ask32_1'],
				"type": "string"
			},
			"ask33": {
				"title": Quests['ask33'],
				"$ref": "#/definitions/yesno"
			},
			"ask33_1": {
				"title": Quests['ask33_1'],
				"type": "string"
			},

			"ask34": {
				"title": Quests['ask34'],
				"$ref": "#/definitions/yesno"
			},
			"ask34_1": {
				"title": Quests['ask34_1'],
				"type": "string"
			}
		}
	};
});
