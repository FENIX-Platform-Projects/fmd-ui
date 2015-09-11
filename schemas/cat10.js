define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat10'],
        "properties": {
            "ask21": {
                "title": Quests['ask21'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask21_1": {
                "title": Quests['ask21_1'],
                "type": "string"
            },
            "ask21_2": {
                "title": Quests['ask20_2'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [

                ]
            },
            "ask21_3": {
                "title": Quests['ask20_3'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask21_4": { 
                "title": Quests['ask20_4'],
                "type": "string",
            },
            "ask22": {
                "title": Quests['ask22'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "less than 5%",
                    "between 5% and 10%",
                    "between 11 and 25%",
                    "more than 25%",
                    "not sure"
                ]
            },
            "ask23": {
                "title": Quests['ask23'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                	"enum": [ "less than 5%",
	                    "between 5% and 10%",
	                    "between 11 and 25%",
	                    "more than 25%",
	                    "not sure"]
                }

        }
    };
});
