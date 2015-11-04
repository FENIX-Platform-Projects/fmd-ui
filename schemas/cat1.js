define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat1'],
		"description": Quests['ask0'],
		"properties": {
			"ask1": {
				"title": Quests["ask1"],
				"$ref": "#/definitions/yesno_official"
			},
			"ask1_1": {		
				"title": Quests['ask1_1'],
				"type": "array",
				"minItems": 1,
				"maxItems": 5,
				"additionalItems":false,				
				"items": {
					"type": "string",
					"title": " ",
					"default": ""
				}
			}
		}
/*		"properties": {
			"ask1": {
				"type": "object",
				"title": Quests["ask1"]
			}
		},
		"oneOf": [
			{
				"title": Quests["no"],
				"type": "null"
			},
			{
				"title": Quests["yes"],
				"$ref": "#/definitions/items5"
			}
		]	*/	
	};
});
