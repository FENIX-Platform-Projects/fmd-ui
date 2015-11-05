define(['i18n!nls/questions'], function(Quests) {
	return {		
		"yesno": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"default": Quests["yes"],
			"enum": [
				Quests["yes"],
				Quests["no"]
			]
		},
		"yesno_partial": {
			"type": "string",
			"uniqueItems": true,
			"format": "select",
			"default": Quests["yes"],
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
			"default": Quests["yes"],
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
			"default": Quests["yesof"],
			"enum": [
				Quests["yesof"],
				Quests["yesnof"],
				Quests["notsure"],
				Quests["no"]
			]
		},
		"yesno_always": {
            "type": "string",
            "uniqueItems": true,
            "format": "select",
            "default": Quests["yesalways"],
            "enum": [
                Quests["yesalways"],
                Quests["yesneeded"],
                Quests["no"]
            ]
        },
		"yesno_sectors": {
            "type": "string",
            "oneOf": [
	            {
                    "title": "Yes, all the individuals",
                    "type": "null",
                },
                {
            	    "title": "Yes, in some sectors",
                    "description": Quests['ask4_1_1'],
                    "type": "string"
                },
                {
                    "title": Quests["no"],
                    "type": "null",
                }
	        ]
        },
		"yesno_movements": {
            "type": "string",
            "oneOf": [
	            {
                    "title": "Yes, all movements",
                    "type": "null",
                },
                {
            	    "title": "Yes, in some sectors",
                    "description": Quests['ask5_1'],
                    "type": "string"
                },
                {
                    "title": Quests["no"],
                    "type": "null",
                }
	        ]
        },        
		"years": {
			"type": "number",
			"uniqueItems": true,
			"format": "select",
			"default": new Date().getFullYear(),
			"enum": [
				2000,2001,2002,2003,2004,
				2005,2006,2007,2008,2009,
				2010,2011,2012,2013,2014,
				2015,2016,2017,2018,2019
			]
		},
		"years_since2012": {
			"type": "number",
			"uniqueItems": true,
			"format": "select",
			"default": new Date().getFullYear(),
			"enum": [
				2012,2013,2014,2015
			]
		},		
		"presentabsent": {
            "type": "string",
            "uniqueItems": true,
            "format": "select",
            "default": Quests["absent"],
            "enum": [
            	Quests["present"],
				Quests["absent"],
            ]
		},
		"items5": {
			"type": "array",
			"minItems": 1,
			"maxItems": 5,
			"additionalItems": false,
			"items": {
				"type": "string",
				"title": " ",
				"default": ""
			}
		}
	};
});