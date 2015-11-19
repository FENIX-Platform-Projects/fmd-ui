define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat7'],
        "description":  Quests['ask12_0'],
        "properties": {
            
            "ask12": {
                "title": Quests['ask12'],

                "oneOf":[
                    {
                        "title": Quests["no"],
                        "type": "null"
                    },

                    {
                        "title": Quests["yes"],
                        "type": "object",
                        "properties":{



                             "ask13": {
                             "title": Quests['ask13'],
                             "description":  Quests['ask13_0'],
                             "$ref": "#/definitions/yesno"
                             },

                             "ask14": {
                             "title": Quests['ask14'],
                             "description": Quests["ask14_0"],
                             "oneOf": [

                             {
                             "title": Quests["yes"],
                             "type":"object",
                             "properties":{
                             "ask14_1":{

                             "title":Quests["ask14_1"],
                             "type":"string"
                             }

                             }

                             },
                             {
                             "title": Quests["no"],
                             "type": "null"
                             }
                             ]

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
                    }


                ]













            }



        }
    };
});
