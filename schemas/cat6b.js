define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6b'],
        "properties": {
            
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
