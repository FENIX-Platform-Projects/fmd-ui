define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat3'],
		"description": Quests['ask3_0'],
		"properties": {


				"ask3": {
				"title": Quests['ask3'],
				"$ref": "#/definitions/yesno_partial"
			},
			"ask3_1": {
				"title": Quests['ask3_1'],
				"type": "string"
			}			
		}
	};
});