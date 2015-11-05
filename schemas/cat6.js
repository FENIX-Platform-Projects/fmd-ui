define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6'],
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {

                    "ask7_1": {
                        "title": Quests['ask7_1'],
                        "$ref": "#/definitions/years_since2012"
                    },
                    "ask7_2": {
                        "title": Quests['ask7_2'],
                        "$ref": "#/definitions/years_since2012"
                    },

                    "ask7_3": {
                        "title": Quests['ask7_3'],
                        "$ref": "#/definitions/years_since2012"
                    },

                    "ask7_4": {
                        "title": Quests['ask7_4'],
                        "$ref": "#/definitions/years_since2012"
                    },
                    "ask7_5": {
                        "title": Quests['ask7_5'],
                        "$ref": "#/definitions/years_since2012"
                    },
                    "ask7_6": {
                        "title": Quests['ask7_6'],
                        "$ref": "#/definitions/years_since2012"
                    },
                    "ask7_7": {
                        "title": Quests['ask7_7'],
                        "$ref": "#/definitions/years_since2012"
                    }
                }
            },
            "ask8": {
                "title": Quests['ask8'],
                "$ref": "#/definitions/yesno"
            },

/*            "ask9": {
                "title": Quests['ask9'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    Quests["yesalways"],
                    Quests["yesneeded"],
                    Quests["no"]
                ]
            },*/

            "ask9": {
                "title": Quests['ask9'],
                "oneOf": [
                    {
                        "title": Quests["yesalways"],
                        "type": "null"
                    },
                    {
                        "title": Quests["yesneeded"],
                        "type": "null"
                    },
                    {
                        "title": Quests["no"],
                        "description": Quests['ask9_1'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Insufficient human resources",
                                "Lack equipment",
                                "Lack financial resources",
                                "Lack of capabilities of skilled human resources"
                            ]
                        }
                    }                 

                ]
            },            

/*            "ask9_1":  {
                "title": Quests['ask9_1'],
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "Insufficient human resources",
                        "Lack equipment",
                        "Lack financial resources",
                        "Lack of capabilities of skilled human resources"
                    ]
                }
            },*/

            "ask10": {
                "title": Quests['ask10'],
                "type": "object",
                "properties": {

                    "ask10_1": {
                        "title": Quests['ask10_1'],
                        "$ref": "#/definitions/yesno_always"
                    },
                    "ask10_2": {
                        "title": Quests['ask10_2'],
                        "$ref": "#/definitions/yesno_always"
                    },

                    "ask10_3": {
                        "title": Quests['ask10_3'],
                        "$ref": "#/definitions/yesno_always"
                    },
                    "ask10_4": {
                        "title": Quests['ask10_4'],
                        "$ref": "#/definitions/yesno_always"
                    },
                    "ask10_5": {
                        "title": Quests['ask10_5'],
                        "$ref": "#/definitions/yesno_always"
                    },
                    "ask10_6": {
                        "title": Quests['ask10_6'],
                        "$ref": "#/definitions/yesno_always"
                    }

                }
            },

            "ask11": {
                "title": Quests['ask11'],
                "type": "array",
                "uniqueItems": true,
                "items": {
    				"type": "string",
                    "enum": [
                        "Animal movement restrictions",
                        "Application of biosecurity measures",
                        "Quarantine measures",
                        "Emergency vaccination"
                    ]
				}
            },

            "ask12": {
                "title": Quests['ask12'],
               "description":  Quests['ask12_0'],
                "$ref": "#/definitions/yesno"
            },
            "ask13": {
                "title": Quests['ask13'],
                "description":  Quests['ask13_0'],
                "$ref": "#/definitions/yesno"
            },
            "ask14": {
                "title": Quests['ask14'],
                "description":  Quests['ask14_0'],
                "$ref": "#/definitions/yesno"
            },
            "ask15": {
                "title": Quests['ask15'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "After every new outbreak event.",
                    "On a change in the epidemiological situation.",
                    "The Control Plan is written but rarely or never applied."
                ]
            },
            "ask16": {
                "title": Quests['ask16'],
                "$ref": "#/definitions/yesno"
            }
        }
    };
});
