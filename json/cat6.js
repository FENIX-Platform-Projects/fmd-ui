define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6'],
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {
                    
										"ask7_1":{
												"title": Quests['ask7_1'],
                        "type": "object",
                        "properties": {
														"ask7_1_1": {
														"title": Quests['ask7_1_1'],
														"type": "string"
														},
														"ask7_1_2": {
														"title": Quests['ask7_1_2'],
														"type": "string"
														}							
														}
                    },
										"ask7_2":{
												"title": Quests['ask7_2'],
                        "type": "object",
                        "properties": {
														"ask7_2_1": {
														"title": Quests['ask7_2_1'],
														"type": "string"
														},
														"ask7_2_2": {
														"title": Quests['ask7_2_2'],
														"type": "string"
														}							
														}
                    },
										
										"ask7_3":{
												"title": Quests['ask7_3'],
                        "type": "object",
                        "properties": {
														"ask7_3_1": {
														"title": Quests['ask7_3_1'],
														"type": "string"
														},
														"ask7_3_2": {
														"title": Quests['ask7_3_2'],
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
							"ask9_1": {
									"title": Quests['ask9'],
									"type": "string"
												},
							"ask9_2": {
									"title": Quests['ask9_2'],
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
                    "ask10_1": {
                        "title": Quests['ask10_1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10_1_1": {
                        "title": Quests['ask10_1_1'],
                        "type": "string"
                    },
                    "ask10_2": {
                        "title": Quests['ask10_2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10_3": {
                        "title": Quests['ask10_3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10_4": {
                        "title": Quests['ask10_4'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10_5": {
                        "title": Quests['ask10_4'],
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
            "ask11_1": {
                "title": Quests['ask11_1'],
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
            "ask14_1": {
                "title": Quests['ask14_1'],
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
