define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat12'],
		"properties": {



			"ask32": {
				"title": Quests['ask32'],
				"oneOf": [

					{
						"title":Quests["no"],
						"type": "null"
					},
					{
						"title":Quests["yes"],
						"description": Quests['ask32_1'],
						"type": "string"
					}
			]


			},


			"ask33": {
				"title": Quests['ask33'],
				"oneOf": [

					{
						"title":Quests["no"],
						"type": "null"
					},
					{
						"title":Quests["yes"],
						"description": Quests['ask33_1'],
						"type": "string"
					}
				]


			},
			"ask34": {
				"title": Quests['ask34'],
				"oneOf": [

					{
						"title":Quests["no"],
						"type": "null"
					},
					{
						"title":Quests["yes"],
						"description": Quests['ask34_1'],
						"type": "string"
					}
				]


			}


		}
	};
});
