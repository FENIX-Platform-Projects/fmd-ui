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
                        "type": "object",
                        "properties": {
                            "ask9_1": {
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
                            }
                        }
                    }                 

                ]
            },

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
            }
        }
    };
});
