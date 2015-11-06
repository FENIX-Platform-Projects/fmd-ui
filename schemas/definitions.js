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
					"type":"object",
					"properties":{
						"ask4_1_1":{

							"title":Quests["ask4_1_1"],
							"type":"string"
						}

					}

                },
                {
                    "title": Quests["no"],
                    "type": "null"
                }
	        ]
        },
		"yesno_movements": {
            "type": "string",
            "oneOf": [
	            {
                    "title": "Yes, all movements",
                    "type": "null"
                },
                {
            	    "title": "Yes, in some sectors",
					"type":"object",
					"properties":{
						"ask5_1":{
						"title": Quests['ask5_1'],
						"type": "string"
						}
					}



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
		},	
		"project": {
            "title": Quests['ask39'],
            "type": "object",
            "properties": {
                "ask39_1": {
                    "title": Quests['ask39_1'],
                    "type": "string"
                },
                "ask40": {
                    "title": Quests['ask40'],
                    "type": "string",
                    "uniqueItems": true,
                    "format": "select",
                    "enum": [
                        "Closed",
                        "On-going",
                        "Pipeline"
                    ]
                },
                "ask41": {
                    "title": Quests['ask41'],
                    "type": "string",
                    "uniqueItems": true,
                    "format": "select",
                    "enum": [
                        "Emergency Support (Immediate-short term)",
                        "Development project (medium to long term)"
                    ]
                },
                "ask42": {
                    "title": Quests['ask42'],
                    "type": "string",
                    "uniqueItems": true,
                    "format": "select",
                    "enum": [
                        "Global",
                        "Regional",
                        "National"
                    ]
                },
                "ask43": {
                    "title": Quests["ask43"],
                    "type": "object",
                    "properties": {
                        "ask43_1": {
                            "title": Quests["ask43_1"],
                            "type": "string"
                        },
                        "ask43_2": {
                            "title": Quests["ask43_2"],
                            "type": "string",
                            "uniqueItems": true,
                            "format": "select",
                            "enum": [
                                "National/Regional Budget",
                                "International donors"
                            ]
                        },
                        "ask43_3": {
                            "title": Quests["ask43_3"],
                            "type": "string"
                        },
                        "ask43_4": {
                            "title": Quests["ask43_4"],
                            "type": "string"
                        },
                        "ask44": {
                            "title": Quests["ask44"],
                            "type": "string",
                            "uniqueItems": true,
                            "format": "select",
                            "enum": [
                                "Epidemiology",
                                "Prevention",
                                "Early Detection",
                                "Emergency Response",
                                "Vaccination",
                                "Laboratory Capacity",
                                "Compensation",
                                "Veterinary Services Capacity",
                                "Communication",
                                "Global/Regional Coordination",
                                "Research"
                            ]

                        },
                        "ask44_1": {
                            "title": Quests["ask44_1"],
                            "$ref": "#/definitions/yesno"

                        },
                        "ask44_2": {
                            "title": Quests["ask44_2"],
                            "type": "string"
                        }
                    }
                }
            }
        }
	};
});
