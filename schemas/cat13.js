define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat13'],
        "properties": {
            "ask35": {
                /*  "title": Quests['ask35'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Use of serum samples to test for more than one diseasemincluding FMD",
                    "Awareness campaign targeting multiple diseases",
                    "Combination of vaccination strategies",
                    "Others"
                ]*/
                "title": Quests["ask35"],
                "oneOf":[
                         {"title": Quests["no"],
                            "type": "null"
                             },



                    {"title": Quests["yes"],
                        "type": "object",
                        "properties":{


                             "ask35_2": {
                             "title": Quests['ask35_2'],
                             "type": "array",
                             "minItems": 1,
                             "maxItems": 5,
                             "items": {
                             "type": "object",
                             "properties":{
                             "ask35_2a":{
                             "title": Quests["ask35_2a"],
                             "type": "string"
                             },
                             "ask35_2b":{
                             "title": Quests["ask35_2b"],
                             "oneOf": [
                             {
                             "title": "Use of serum samples to test for more than one diseasemincluding FMD",
                             "type": "null"
                             },
                             {
                             "title": "Awareness campaign targeting multiple diseases",
                             "type": "null"
                             },                    {
                             "title": "Combination of vaccination strategies",
                             "type": "null"
                             },
                             {
                             "title": "Others",
                             "type": "object",
                             "properties": {
                             "ask35_1": {
                             "title": Quests['ask35_1'],
                             "type":"string"
                             }
                             }

                             }
                             ]
                             }
                             }
                             },
                             "additionalItems":false
                             }



                        }

                    }
                ]

                }





        }
    };
});