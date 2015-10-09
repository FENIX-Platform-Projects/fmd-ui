define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": "Filter by",
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
				"options": {
					"disabled": true
				},
				"type": "string",
				"title": "From Date",
				"format": "date"
			},
			"dateto": {
				"options": {
					"disabled": true
				},				
				"type": "string",
				"title": "To Date",
				"format": "date"
			}		
		}
	};
});