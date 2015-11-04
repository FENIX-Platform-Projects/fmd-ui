define(['i18n!nls/questions'], function(Quests) {
	return {		
		"yesno": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"enum": [
				Quests["yes"],
				Quests["no"]
			]
		},
		"yesno_partial": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"enum": [
				Quests["yes"],
				Quests["no"],
				Quests["partial"]
			]
		},
		"yesno_notsure": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"enum": [
				Quests["yes"],
				Quests["no"],
				Quests["notsure"]
			]
		},		
		"yesno_official": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"enum": [
				Quests["yesof"],
				Quests["yesnof"],
				Quests["nosure"],
				Quests["no"]
			]
		},
		"years": [
			2000,2001,2002,2003,2004,
			2005,2006,2007,2008,2009,
			2010,2011,2012,2013,2014,
			2015,2016,2017,2018,2019
        ]		
	};
});
