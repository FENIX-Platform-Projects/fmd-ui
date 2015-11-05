define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat7'],
		"description":Quests["ask17_0"],
	    "properties": {
	        "ask17a": {
				"title":Quests["ask17a"],
	            "oneOf":[
					{"title":Quests["no"],"type":"null"},
					{"title":Quests["yes"],"type":"object","properties":{

						"ask17_0a": {
							"title": Quests['ask17_0a'],
							"type": "array",
							"minItems": 1,
							"maxItems": 5,
							"items": {
								"type": "string",
								"title": " ",
								"default": ""
							},
							"additionalItems":false
						}


					}}

				]
	        },

			"ask17b": {
				"title":Quests["ask17b"],
				"oneOf":[
					{"title":Quests["no"],"type":"null"},
					{"title":Quests["yes"],"type":"object","properties":{

						"ask17_0b": {
							"title": Quests['ask17_0b'],
							"type": "array",
							"minItems": 1,
							"maxItems": 5,
							"items": {
								"type": "string",
								"title": " ",
								"default": ""
							},
							"additionalItems":false
						}


					}}

				]
			},

			"ask18": {
				"title": Quests['ask18'],
"oneOf":[
	{"title":Quests["no"],"type":"null"},
	{"title":Quests["yes"],"type":"object","properties":{

		"ask18_1": {
			"title": Quests['ask18_1'],
			"type": "array",
			"minItems": 1,
			"maxItems": 5,
			"items": {
				"type": "string",
				"title": " ",
				"default": ""
			},
			"additionalItems":false
		}


	}}

]
			}


	    }
	};
});
