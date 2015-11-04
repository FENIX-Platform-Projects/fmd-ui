define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat15'],
        "properties": {
            "ask38": {
                "title": Quests['ask38'],
                "$ref": "#/definitions/yesno"
            },
            "ask39": {
                "title": Quests['ask39'],
                "type": "array",
                "format": "tabs",
                "items": {
                    "$ref": "#/definitions/project"
                },
                "minItems": 1,
                "maxItems": 3,
                "additionalItems": false
            }
        },
        "definitions": {
            "project": {
                "title": Quests['ask39'],

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

                    "ask43":{
                        "title": Quests["ask43"],
                        "type":"object",
                        "properties":{

                            "ask43_1":{
                                "title": Quests["ask43_1"],
                                "type":"string"
                            },
                            "ask43_2":{
                                "title": Quests["ask43_2"],
                                "type":"string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "National/Regional Budget",
                                    "International donors"
                                ]

                            },
                            "ask43_3":{

                                "title": Quests["ask43_3"],
                                "type":"string"
                            },
                            "ask43_4":{
                                "title": Quests["ask43_4"],
                                "type":"string"

                            },

                            "ask44":{
                                "title": Quests["ask44"],
                                "type":"string",
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


                            "ask44_1":{
                                "title": Quests["ask44_1"],
                                "$ref": "#/definitions/yesno"

                            },
                            "ask44_2":{
                                "title": Quests["ask44_2"],
                                "type":"string"

                            }



                        }



                    }

















                }
            }
        }
    };
});