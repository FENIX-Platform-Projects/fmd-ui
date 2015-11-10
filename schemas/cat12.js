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
						"type":"object",
						"properties": {
							"ask32_1": {
								"title": Quests["ask32_1"],
								"type": "array",
								"$ref": "#/definitions/items5"

							}


						}
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
						"type":"object",
						"properties": {
							"ask33_1": {
								"title": Quests["ask33_1"],
								"type": "array",
								"$ref": "#/definitions/items5"
							}


						}
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
						"type":"object",
						"properties": {
							"ask34_1": {
								"title": Quests["ask34_1"],
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
