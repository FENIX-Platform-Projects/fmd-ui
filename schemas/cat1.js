define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat1'],
		"description": Quests['ask0'],
		"properties": {
			"ask1": {
				"title": Quests["ask1"],
				"oneOf": [
					{
						"title": Quests["no"],
						"type": "null"
					},		
					{
						"title": Quests["yes"],
						"description": Quests['ask1_1'],
						"type": "array",
						"format": "tabs",
						"minItems": 1,
						"maxItems": 3,
						"additionalItems": false,
						"items": {
							"$ref": "#/definitions/desease"
						}
					}
				]
			}
		}
	};
});
