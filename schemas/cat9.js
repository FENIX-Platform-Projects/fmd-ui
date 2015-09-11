define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask20": {
                "title": Quests['ask20'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask20_1": {
                "title": Quests['ask20_1'],
                "type": "string"
            },
            "ask20_2": {
                "title": Quests['ask20_2'],
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "Small holder",
                        "Dairy production",
                        "Beef production",
                        "Small ruminants",
                        "Pigs",
                        "Mixed livestock systems",
                        "Other"
                    ]
                }
            },
            "ask20_3": {
                "title": Quests['ask20_3'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask20_4": {
                "title": Quests['ask20_4'],
                "type": "string"
            }
        }
    };
});
