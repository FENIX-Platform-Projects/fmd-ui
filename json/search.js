define({
	"type": "object",
	"title": "Search Questionnaire",
	"properties": {
		"country": {
			"type": "string",
			"title": "Country Name"
		},
		"name": {
			"type": "string",
			"title": "Compiler Name"
		},
		"contact": {
			"type": "string",
			"title": "Compiler Contact Information"
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
});