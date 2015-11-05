define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat4'],
		"description": Quests['ask4_0'],
		"properties": {
			"ask4": {
				"type":"object",
				"title": Quests['ask4'],				
				"properties": {
					"ask4_1": {
						"title": Quests['ask4_1'],
						"$ref": "#/definitions/yesno_sectors"
					},
					"ask4_2": {
						"title": Quests['ask4_2'],
						"$ref": "#/definitions/yesno_sectors"
					},
					"ask4_3": {
						"title": Quests['ask4_3'],
						"$ref": "#/definitions/yesno_sectors"
					}
				}
			}
		}
	};
});