define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat7'],
	    "properties": {
	        "ask17a": {
	            "title": Quests['ask17a'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No"
	            ]
	        },
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
			},
			"ask17b": {
				"title": Quests['ask17b'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Not sure"
				]
			},
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
			},


			"ask18": {
				"title": Quests['ask18'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No"
				]
			},

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
	    }
	};
});
