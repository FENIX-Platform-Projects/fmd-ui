define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat10'],
        "properties": {
            "ask23": {
                "title": Quests['ask23'],
                "$ref": "#/definitions/yesno"
            },
            "ask23_1": {
                "title": Quests['ask23_1'],
                "type": "string"
            },
            "ask23_2": {
                "title": Quests['ask23_2'],
                "type": "object",
                "properties":{
                    "ask23_2_1":{
                        "title":Quests['ask23_2_1'],
                        "type": "object",
                        "properties":
                        {
                            "ask23_2_1a": {
                                "title": Quests['ask23_2_1a'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Under 2 years",
                                    "2 years and above"
                                ]
                            },

                            "ask23_2_1b": {
                                "title": Quests['ask23_2_1b'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Small holder",
                                    "Dairy production",
                                    "Beef production",
                                    "Small ruminants",
                                    "Pigs",
                                    "Mixed Livestock",
                                    "System"

                                ]
                            },

                            "ask23_2_1c": {
                                "title": Quests['ask23_2_1c'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Selected area",
                                    "Nationwide"
                                ]
                            }
                        }
                    },
                    "ask23_2_2":{
                        "title":Quests['ask23_2_2'],
                        "type": "object",
                        "properties":
                        {
                            "ask23_2_2a": {
                                "title": Quests['ask23_2_2a'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Under 2 years",
                                    "2 years and above"
                                ]
                            },

                            "ask23_2_2b": {
                                "title": Quests['ask23_2_2b'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Small holder",
                                    "Dairy production",
                                    "Beef production",
                                    "Small ruminants",
                                    "Pigs",
                                    "Mixed Livestock",
                                    "System"

                                ]
                            },

                            "ask23_2_2c": {
                                "title": Quests['ask23_2_2c'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Selected area",
                                    "Nationwide"
                                ]
                            }
                        }


                    },




                    "ask23_2_3":{
                        "title":Quests['ask23_2_3'],
                        "type": "object",
                        "properties":
                        {
                            "ask23_2_3a": {
                                "title": Quests['ask23_2_3a'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Under 2 years",
                                    "2 years and above"
                                ]
                            },

                            "ask23_2_3b": {
                                "title": Quests['ask23_2_3b'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Small holder",
                                    "Dairy production",
                                    "Beef production",
                                    "Small ruminants",
                                    "Pigs",
                                    "Mixed Livestock",
                                    "System"

                                ]
                            },

                            " ask23_2_3c": {
                                "title": Quests['ask23_2_3c'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "Selected area",
                                    "Nationwide"
                                ]
                            }




                        }


                    }




                }




            },


            "ask24": {
                "title": Quests['ask24'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "less than 5%",
                    "between 5% and 10%",
                    "between 11 and 25%",
                    "more than 25%"
                ]
            },
            "ask25": {
                "title": Quests['ask25'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                	"enum": [ "less than 5%",
	                    "between 5% and 10%",
	                    "between 11 and 25%",
	                    "more than 25%"

                    ]
                }

        }
    };
});
