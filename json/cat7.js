define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat7'],
	    "properties": {
	        "ask16": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask16_1": {
	            "title": Quests['ask16_1'],
	            "type": "string",
	        },
	        "ask16_2": {
	            "title": Quests['ask16_2'],
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
	        "ask17": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask17_1": {
	            "title": Quests['ask16_1'],
	            "type": "string",
	        },
	        "ask17_2": {
	            "title": Quests['ask16_2'],
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
