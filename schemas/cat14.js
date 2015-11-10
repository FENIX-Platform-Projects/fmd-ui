define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat14'],
        "properties": {
            "ask36": {
                "title": Quests['ask36'],
                "type": "array",
                "minItems": 1,
                "maxItems": 5,
                "items": {
                    "type": "string",
                    "title": " ",
                    "default": ""
                },
                "additionalItems": false
            },

            "ask37": {
                "title": Quests['ask37'],
                "description":Quests["ask37_descr"],

                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "Epidemiology training",
                        "Laboratory training",
                        "Development of FMD control strategy",
                        "Development of laboratory capacity",
                        "Regional coordination",
                        "Training on surveillance",
                        "Training on Risk Analysis",
                        "Socio-Economic impact studies",
                        "Development/implementation of legislation and Regulation",
                        "Management of FMD emergencies",
                        "Animal Identification",
                        "Movement Control"
                    ]
                }
            }
        }
	};
});