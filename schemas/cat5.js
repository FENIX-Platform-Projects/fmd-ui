define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat5'],
		"properties": {
			"ask5": {
				"title": Quests['ask5'],
				"type":"string",
				"uniqueItems": true,
				"format":"select",
				"enum":[
						"Yes, all movements",
						"Yes, in some sectors",
						"No"
						]		
				
			},
			"ask5_1": {
				"title": Quests['ask5_1'],
				"type":"string",
			},

			"ask6": {
				"title": Quests['ask6'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
						"Yes",
						"No"
					]		
			},

			"ask6_1": {
				"title": Quests['ask6_1'],
				"type": "string",

			}
		}		
	}
});