define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat15'],
        "properties": {
            "ask36": {
                "title": Quests['ask36'],                
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask36_1": {
                "title": Quests['ask36_1'],
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
                "title": Quests['ask36_0'],
                "type": "object",
                "properties": {
                    "ask36_1_1": {
                        "title": Quests['ask36_1_1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Global",
                            "Regional",
                            "National"
                        ]
                    },
                    "ask36_1_2": {
                        "title": Quests['ask36_1_2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Closed",
                            "On-going",
                            "Pipeline"
                        ]
                    },
                    "ask36_1_3": {
                        "title": Quests['ask36_1_3'],
                        "type": "object",
                        "properties": {
                            "ask36_1_3_1": {
                                "title": Quests['ask36_1_3_1'],
                                "type": "number"
                            },
                            "ask36_1_3_2": {
                                "title": Quests['ask36_1_3_2'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "National/Regional Budget",
                                    "External Support"
                                ]
                            },
                            "ask36_1_3_3": {
                                "title": Quests['ask36_1_3_3'],
                                "type": "string"
                            }
                        }
                    },
                    "ask36_2": {
                        "title": Quests['ask36_2'],
                        "type": "string"
                    },
                    "ask36_3": {
                        "title": Quests['ask36_3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Emergency Support (Immediate-short term)",
                            "Development project (medium to long term)"
                        ]
                    },
                    "ask36_4": {
                        "title": Quests['ask36_4'],
                        "type": "string",
                        "uniqueItems": false,
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
                    "ask36_4_1": {
                        "title": Quests['ask36_4_1'],
                        "type": "string"
                    },
                    "ask36_4": {
                        "title": Quests['ask36_5'],
                        "type": "string",
                        "uniqueItems": false,
                        "format": "select",
                        "enum": [
                            "FMD PCP",
                            "OIE Performance of Veterinary Services Pathway (PVS)"
                        ]
                    },
                    "ask36_5": {
                        "title": Quests['ask36_5'],
                        "type": "string"
                    }
                }
            }
        }
    };
});