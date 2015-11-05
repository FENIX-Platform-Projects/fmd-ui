define(['i18n!nls/questions'], function(Quests) {
    return {
        "title": Quests['cat15'],
        "description": Quests['ask38'],
        "oneOf": [
            {
                "title": Quests["no"],
                "type": "null"
            },
            {
                "title": Quests["yes"],
                "description": Quests['ask39'],
                "type": "array",
                "format": "tabs",
                "minItems": 1,
                "maxItems": 3,
                "additionalItems": false,
                "items": {
                    "$ref": "#/definitions/project"
                }                
            }
        ]
    };
});