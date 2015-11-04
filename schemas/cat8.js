define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask19": {
                "title": Quests['ask19'],
                "$ref": "#/definitions/yesno"
            },


            "ask20": {
                "title": Quests['ask20'],
                "type": "object",
                "properties":
                {
                    "ask20_1": {
                        "title": Quests['ask20_1'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Eradication of FMD virus",
                                "Control of clinical FMD",
                                "Apply for disease free zone",
                                "Apply for official OIE recognition of FMD free with vaccination",
                                "Apply for official OIE recognition of FMD free without vaccination"
                            ]
                        }
                    },


                    "ask20_2": {
                        "title": Quests['ask20_2'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Eradication of FMD virus",
                                "Control of clinical FMD",
                                "Apply for disease free zone",
                                "Apply for official OIE recognition of FMD free with vaccination",
                                "Apply for official OIE recognition of FMD free without vaccination"
                            ]
                        }
                    }








                }



            },

            "aks21": {
                "title": Quests['ask21'],
                "type": "string"
            }
        }
    };
});