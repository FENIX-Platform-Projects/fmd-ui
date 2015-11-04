define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat4'],
		"properties": {
			"ask4": {
				"type":"object",
				"title": Quests['ask4'],				
				"properties": {
					"ask4_1": {
						"title": Quests['ask4_1'],
						"$ref": "#/definitions/yesno_partial"
					},
					"ask4_1_1": {
						"title": Quests['ask4_1_1'],
						"type": "string"
					},
					"ask4_2": {
						"title": Quests['ask4_2'],
						"$ref": "#/definitions/yesno_partial"
					},
					"ask4_2_1": {
						"title": Quests['ask4_2_1'],
						"type": "string"
					},
					"ask4_3": {
						"title": Quests['ask4_3'],
						"$ref": "#/definitions/yesno_partial"
					},
					"ask4_3_1": {
						"title": Quests['ask4_3_1'],
						"type": "string"
					}
				}
			}
		}
	};
});