define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat5'],
		"properties": {
			"ask5": {
				"title": Quests['ask5'],
				"$ref": "#/definitions/yesno_movements"
			},

			"ask6": {
				"title": Quests['ask6'],
	            "oneOf": [
		            {
	                    "title": Quests["no"],
	                    "type": "null",
	                },
	                {
	            	    "title": Quests["yes"],
	                    "description": Quests['ask6_1'],
	                    "type": "string"
	                }
		        ]
			}
		}		
	}
});