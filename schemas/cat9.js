define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat9'],
        "properties": {
            "ask22": {
                "title": Quests['ask22'],
                "$ref": "#/definitions/yesno"
            },
            "ask22_1": {
                "title": Quests['ask22_1'],
                "type": "string"
            },
            "ask22_2": {
                "title": Quests['ask22_2'],
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
                        "Pastoralist",
                        "Silvo-pastoralist"

                    ]
                }
            },
            "ask22_3": {
                "title": Quests['ask22_3'],
                "$ref": "#/definitions/yesno"
            }
        }
    };
});
