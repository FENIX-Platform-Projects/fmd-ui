define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat3'],
		"properties": {
			"ask3": {
				"title": Quests['ask3'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask3_1": {
				"title": Quests['ask3_1'],
				"type": "string"
			}			
		}
	};
});