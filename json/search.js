define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": "Filter Questionnaire by",
		"properties": {

	        "country": {
	            "type": "string",
	            "title": Quests['contact_info_2']
	        },
	        "name": {
	            "type": "string",
	            "title": Quests['contact_info_3']
	        },
			"datefrom": {
				"type": "string",
				"title": "From Date",
				"format": "date"
			},
			"dateto": {
				"type": "string",
				"title": "To Date",
				"format": "date"
			}		
		}
	};
});