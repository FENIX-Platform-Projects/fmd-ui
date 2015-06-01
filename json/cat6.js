define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6'],
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {
                    
										"ask7.1":{
												"title": Quests['ask7.1'],
                        "type": "object",
                        "properties": {
														"ask7.1.1": {
														"title": Quests['ask7.1.1'],
														"type": "string"
														},
														"ask7.1.2": {
														"title": Quests['ask7.1.2'],
														"type": "string"
														}							
														}
                    },
										"ask7.2":{
												"title": Quests['ask7.2'],
                        "type": "object",
                        "properties": {
														"ask7.2.1": {
														"title": Quests['ask7.2.1'],
														"type": "string"
														},
														"ask7.2.2": {
														"title": Quests['ask7.2.2'],
														"type": "string"
														}							
														}
                    },
										
										"ask7.3":{
												"title": Quests['ask7.3'],
                        "type": "object",
                        "properties": {
														"ask7.3.1": {
														"title": Quests['ask7.3.1'],
														"type": "string"
														},
														"ask7.3.2": {
														"title": Quests['ask7.3.2'],
														"type": "string"
														}							
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
                    "No",
                    "Not sure"
                ]
            },
						"ask9": {
						"title": Quests['ask9'],
						"type": "object",
						"properties": {
							"ask9.1": {
									"title": Quests['ask9'],
									"type": "string"
												},
							"ask9.2": {
									"title": Quests['ask9.2'],
									"type": "string",
									"uniqueItems": true,
									"format": "select",
									"enum": [
											"Yes",
											"No",
											"Maybe"
									]
												}	
												}
						},
            "ask10": {
                "title": Quests['ask10'],
                "type": "object",
                "properties": {
                    "ask10.1": {
                        "title": Quests['ask10.1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.1.1": {
                        "title": Quests['ask10.1.1'],
                        "type": "string"
                    },
                    "ask10.2": {
                        "title": Quests['ask10.2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.3": {
                        "title": Quests['ask10.3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.4": {
                        "title": Quests['ask10.4'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.5": {
                        "title": Quests['ask10.4'],
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
            "ask11.1": {
                "title": Quests['ask11.1'],
                "type": "string",
            },
            "ask13": {
                "title": Quests['ask13'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask14": {
                "title": Quests['ask14'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask14.1": {
                "title": Quests['ask14.1'],
                "type": "string",
            },
            "ask15": {
                "title": Quests['ask15'],
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
