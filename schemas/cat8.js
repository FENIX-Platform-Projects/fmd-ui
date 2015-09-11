define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask18": {
                "title": Quests['ask18'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask18_1": {
                "title": Quests['ask18_1'],
                "type": "object",
                "properties": {
                    "ask18_1_1": {
                        "title": Quests['ask18_1_1'],
                        "type": "string",
                        "format": "date"
                    },
                    "ask18_1_2": {
                        "title": Quests['ask18_1_2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Yes",
                            "No",
                            "Not sure"
                        ]
                    }
                }
            },
            "aks18_2": {
                "title": Quests['ask18_2'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "aks19": {
                "title": Quests['ask19'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            }
        }
    };
});