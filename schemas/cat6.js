define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6'],
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {

                    "ask7_1": {
                        "title": Quests['ask7_1'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },
                    "ask7_2": {
                        "title": Quests['ask7_2'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },

                    "ask7_3": {
                        "title": Quests['ask7_3'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },

                    "ask7_4": {
                        "title": Quests['ask7_4'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },
                    "ask7_5": {
                        "title": Quests['ask7_5'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },
                    "ask7_6": {
                        "title": Quests['ask7_6'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    },
                    "ask7_7": {
                        "title": Quests['ask7_7'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "2014",
                                "2013",
                                "2012"
                            ]
                        }
                    }
                }
            },

                    "ask8": {
                "title": Quests['ask8'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask9": {
                "title": Quests['ask9'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes, always/routinely",
                    "Yes, when needed/when appropriate",
                    "No"
                ]
            },


            "ask9_1":  {
                "title": Quests['ask9_1'],
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "Insufficient human resources",
                        "Lack equipment",
                        "Lack financial resources",
                        "Lack of capabilities of skilled human resources"
                    ]
                }
            },


            "ask10": {
                "title": Quests['ask10'],
                "type": "object",
                "properties": {

                    "ask10_1": {
                        "title": Quests['ask10_1'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    },
                    "ask10_2": {
                        "title": Quests['ask10_2'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    },

                    "ask10_3": {
                        "title": Quests['ask10_3'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    },
                    "ask10_4": {
                        "title": Quests['ask10_4'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    },
                    "ask10_5": {
                        "title": Quests['ask10_5'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    },
                    "ask10_6": {
                        "title": Quests['ask10_6'],
                        "type": "array",
                        "uniqueItems": true,
                        "items": {
                            "type": "string",
                            "enum": [
                                "Yes, always/routinely",
                                "Yes, when needed/when appropriate",
                                "No"
                            ]
                        }
                    }

                }
            },

            "ask11": {
                "title": Quests['ask11'],
                "type": "array",
                "uniqueItems": true,
                "items": {
    				"type": "string",
                    "enum": [
                        "Animal movement restrictions",
                        "Application of biosecurity measures",
                        "Quarantine measures",
                        "Emergency vaccination"
                    ]
				}
            },

            "ask12": {
                "title": Quests['ask12'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask13": {
                "title": Quests['ask13'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask14": {
                "title": Quests['ask14'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask15": {
                "title": Quests['ask15'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "After every new outbreak event.",
                    " On a change in the epidemiological situation.",
                    " The Control Plan is written but rarely or never applied."
                ]
            },

            "ask16": {
                "title": Quests['ask16'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"

                ]
            }





        }
    };
});
