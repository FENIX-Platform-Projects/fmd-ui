define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat7'],
		"description":Quests["ask17_0"],
	    "properties": {
	        "ask17a": {
				"title": Quests["ask17a"],
	            "oneOf": [
					{
						"title": Quests["no"],
						"type":"null"
					},
					{
						"title": Quests["yes"],
						"description": Quests['ask17_0a'],
						"type": "array",
						"$ref": "#/definitions/items5"
					}
				]
	        },

			"ask17b": {
				"title": Quests["ask17b"],
				"oneOf": [
					{
						"title": Quests["no"],
						"type": "null"
					},
					{
						"title": Quests["yes"],
						"description": Quests['ask17_0b'],
						"type": "array",
						"$ref": "#/definitions/items5"
					}
				]
			},

			"ask18": {
				"title": Quests['ask18'],
				"oneOf": [
					{
						"title": Quests["no"],
						"type":"null"
					},
					{
						"title": Quests["yes"],
						"description": Quests['ask18_1'],
						"type": "array",
						"$ref": "#/definitions/items5"
					}
				]
			}
	    }
	};
});
