define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat3'],
		"description": Quests['ask3_0'],
		"properties": {
			"ask3": {
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

						"type": "object",
						"properties": {

							"ask3_1": {
								"title": Quests['ask3_1'],
								"type": "array",
								"$ref": "#/definitions/items5"
							}

						}
					}
				]
			}
		}
	};
});