define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat1'],
		"description": Quests['ask3_0'],
		"properties": {
			"ask1": {
				"title": Quests["ask3"],
				"oneOf": [
					{
						"title": Quests["no"],
						"type": "null"
					},

					{
						"title": Quests["yes"],
						"type": "null"
					},

					{
						"title":Quests["partial"],
						"description": Quests['ask3_1'],
						"type": "array",
						"$ref": "#/definitions/items5"
					}
				]
			}
		}
	};
});