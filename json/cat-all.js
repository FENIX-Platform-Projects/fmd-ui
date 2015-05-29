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
            "ask21.1": {
                "title": Quests['ask21.1'],
                "type": "string"
            },
            "ask21.2": {
                "title": Quests['ask20.2'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [

                ]
            },
            "ask21.3": {
                "title": Quests['ask20.3'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask21.4": {
                "title": Quests['ask20.4'],
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
                "type": "array",
                "uniqueItems": true,
                "items": {
                	"type": "string",
                	"enum": [ "less than 5%",
	                    "between 5% and 10%",
	                    "between 11 and 25%",
	                    "more than 25%",
	                    "not sure"]
                }
            }

        }
    };
});define(['i18n!nls/questions'], function(Quests) {
    return {

    };
});define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat12'],
	    "properties": {
	        "ask31": {
	            "title": Quests['ask31'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No"
	            ]
	        },
	        "ask31.1": {
	            "title": Quests['ask21.1'],
	            "type": "string"
	        },
	        "ask32": {
	            "title": Quests['ask32'],
	            "type": "string",
	            "uniqueItems": false,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No"
	            ]
	        },
	        "ask31.1": {
	            "title": Quests['ask21.1'],
	            "type": "string"
	        }
	    }
	};
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat13'],
        "properties": {
            "ask33": {
                "title": Quests['ask31'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask33.1": {
                "title": Quests['ask21.1'],
                "type": "string"
            }

        }
    };
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat14'],
        "properties": {
            "ask34": {
                "title": Quests['ask34'],
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
            "ask35": {
                "title": Quests['ask35'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
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
            },
            "ask35.1": {
                "title": Quests['ask35.1'],
                "type": "string"
            }
        }
	};
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat15'],
        "properties": {
            "ask36": {
                "title": Quests['ask36'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask36.1": {
                "title": Quests['ask36.1'],
                "type": "object",
                "properties": {
                    "ask36.1.1": {
                        "title": Quests['ask36.1.1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Global",
                            "Regional",
                            "National"
                        ]
                    },
                    "ask36.1.2": {
                        "title": Quests['ask36.1.2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Closed",
                            "On-going",
                            "Pipeline"
                        ]
                    },
                    "ask36.1.3": {
                        "title": Quests['ask36.1.3'],
                        "type": "object",
                        "properties": {
                            "ask36.1.3.1": {
                                "title": Quests['ask36.1.3.1'],
                                "type": "number"
                            },
                            "ask36.1.3.2": {
                                "title": Quests['ask36.1.3.2'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "National/Regional Budget",
                                    "External Support"
                                ]
                            },
                            "ask36.1.3.3": {
                                "title": Quests['ask36.1.3.3'],
                                "type": "string"
                            }
                        }
                    },
                    "ask36.2": {
                        "title": Quests['ask36.2'],
                        "type": "string"
                    },
                    "ask36.3": {
                        "title": Quests['ask36.3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Emergency Support (Immediate-short term)",
                            "Development project (medium to long term)"
                        ]
                    },
                    "ask36.4": {
                        "title": Quests['ask36.4'],
                        "type": "string",
                        "uniqueItems": false,
                        "format": "select",
                        "enum": [
                            "Epidemiology",
                            "Prevention",
                            "Early Detection",
                            "Emergency Response",
                            "Vaccination",
                            "Laboratory Capacity",
                            "Compensation",
                            "Veterinary Services Capacity",
                            "Communication",
                            "Global/Regional Coordination",
                            "Research"
                        ]
                    },
                    "ask36.4.1": {
                        "title": Quests['ask36.4.1'],
                        "type": "string"
                    },
                    "ask36.4": {
                        "title": Quests['ask36.5'],
                        "type": "string",
                        "uniqueItems": false,
                        "format": "select",
                        "enum": [
                            "FMD PCP",
                            "OIE Performance of Veterinary Services Pathway (PVS)"
                        ]
                    },
                    "ask36.5.1": {
                        "title": Quests['ask36.4.1'],
                        "type": "string"
                    }
                }
            }
        }
    };
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat16'],
        "properties": {
            "ask37": {
                "title": Quests['ask37'],
                "type": "object",
                "properties": {
                    "ask37.1": {
                        "title": Quests['ask37.1'],
                        "type": "object",
                        "properties": {
                            "ask37.1.1": {
                                "title": Quests['ask37.1.1'],
                                "type": "string"
                            },
                            "ask37.1.2": {
                                "title": Quests['ask37.1.2'],
                                "type": "string"
                            }
                        }
                    },
                    "ask37.2": {
                        "title": Quests['ask37.1'],
                        "type": "object",
                        "properties": {
                            "ask37.1.1": {
                                "title": Quests['ask37.2.1'],
                                "type": "string"
                            },
                            "ask37.1.2": {
                                "title": Quests['ask37.2.2'],
                                "type": "string"
                            }
                        }
                    },
                    "ask37.3": {
                        "title": Quests['ask37.1'],
                        "type": "object",
                        "properties": {
                            "ask37.1.1": {
                                "title": Quests['ask37.3.1'],
                                "type": "string"
                            },
                            "ask37.1.2": {
                                "title": Quests['ask37.3.2'],
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    };
});define(['i18n!nls/questions'], function(Quests) {

	return {
		"type": "object",
		"title": Quests['cat1'],
		"properties": {
			"ask1": {
				"title": Quests['ask1'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes, officially",
					"Yes, not officially",
					"No",
					"Not sure"
				]
			},
			"ask1.1": {
				"title": Quests['ask1.1'],
				"type": "array",
				"minItems": 1,
				"maxItems": 5,
				"items": {
					"type": "string",
					"title": " ",
					"default": ""
				},
				"additionalItems":false
			}
		}
	};
});define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat2'],
		"properties": {
			"ask2": {
				"title": Quests['ask2'],
				"type": "object",
				"properties": {
						"ask2.1":{
						"title": Quests['ask2.1'],
						"type":"object"
						"properties":{
									"ask2.1.1":{
									"title": Quests['ask2.1.1']
									"type":	"object",
									"properties": {
													"ask2.1.1.1":{ 
													"title": Quests['ask2.1.1.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.1.1.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.2":{
									"title": Quests['ask2.1.2']
									"type":	"object",
									"properties": {
													"ask2.1.2.1":{ 
													"title": Quests['ask2.1.2.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.2.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.3":{
									"title": Quests['ask2.1.3']
									"type":	"object",
									"properties": {
													"ask2.1.3.1":{ 
													"title": Quests['ask2.1.3.1']
													"type": "string"
													},
													
													"ask2.1.3.2": {
													"title":Quests['ask2.1.3.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.4":{
									"title": Quests['ask2.1.4']
									"type":	"object",
									"properties": {
													"ask2.1.4.1":{ 
													"title": Quests['ask2.1.4.1']
													"type": "string"
													},
													
													"ask2.1.4.2": {
													"title":Quests['ask2.1.4.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.5":{
									"title": Quests['ask2.5.1']
									"type":	"object",
									"properties": {
													"ask2.1.5.1":{ 
													"title": Quests['ask2.1.5.1']
													"type": "string"
													},
													
													"ask2.1.5.2": {
													"title":Quests['ask2.1.5.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.6":{
									"title": Quests['ask2.1.6']
									"type":	"object",
									"properties": {
													"ask2.1.6.1":{ 
													"title": Quests['ask2.1.6.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.6.2']
													"type": "string"
												}
						
										}
				                        }			
				
				                        }
										},
						"ask2.2":{
				
						"title": Quests['ask2.2'],
						"type":"object"
						"properties":{
									"ask2.2.1":{
									"title": Quests['ask2.2.1']
									"type":	"object",
									"properties": {
													"ask2.2.1.1":{ 
													"title": Quests['ask2.2.1.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.2.1.1.2']
													"type": "string",
													 "uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.2":{
									"title": Quests['ask2.2.2']
									"type":	"object",
									"properties": {
													"ask2.2.2.1":{ 
													"title": Quests['ask2.2.2.1']
													"type": "string"
													},
													
													"ask2.2.1.2": {
													"title":Quests['ask2.2.2.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.3":{
									"title": Quests['ask2.2.3']
									"type":	"object",
									"properties": {
													"ask2.2.3.1":{ 
													"title": Quests['ask2.2.3.1']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
													},
													
													"ask2.2.3.2": {
													"title":Quests['ask2.2.3.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.2.4":{
									"title": Quests['ask2.2.4']
									"type":	"object",
									"properties": {
													"ask2.2.4.1":{ 
													"title": Quests['ask2.2.4.1']
													"type": "string"
													},
													
													"ask2.2.4.2": {
													"title":Quests['ask2.2.4.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.5":{
									"title": Quests['ask2.2.1']
									"type":	"object",
									"properties": {
													"ask2.2.5.1":{ 
													"title": Quests['ask2.2.5.1']
													"type": "string"
													},
													
													"ask2.2.5.2": {
													"title":Quests['ask2.2.5.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.6":{
									"title": Quests['ask2.2.6']
									"type":	"object",
									"properties": {
													"ask2.2.6.1":{ 
													"title": Quests['ask2.2.6.1']
													"type": "string"
													},
													
													"ask2.2.1.2": {
													"title":Quests['ask2.2.6.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        }			
				
				                        }
				
				
				
				
				
				
				                  }
								
				
				
							}
			}
		}
	};
});
define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat3'],
		"properties": {
			"ask3": {
				"title": Quests['ask3'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask3.1": {
				"title": Quests['ask3.1'],
				"type": "string"
			}			
		}
	};
});define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat4'],
		"properties": {
			"ask4": {
				"type":"object",
				"title": Quests['ask4'],				
				"properties": {
					"ask4.1": {
						"title": Quests['ask4.1'],
						"type": "string",
						"uniqueItems": true,
						"format": "select",
						"enum": [
							"Yes",
							"No",
							"Partial"
						]
					},
					"ask4.1.1": {
						"title": Quests['ask4.1.1'],
						"type": "string"
					},
					"ask4.2": {
						"title": Quests['ask4.2'],
						"type": "string",
						"uniqueItems": true,
						"format": "select",
						"enum": [
							"Yes",
							"No",
							"Partial"
						]
					},
					"ask4.2.1": {
						"title": Quests['ask4.2.1'],
						"type": "string"
					},
					"ask4.3": {
						"title": Quests['ask4.3'],
						"type": "string",
						"uniqueItems": true,
						"format": "select",
						"enum": [
							"Yes",
							"No",
							"Partial"
						]
					},
					"ask4.3.1": {
						"title": Quests['ask4.3.1'],
						"type": "string"
					}
				}
			}
		}
	};
});define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat5'],
		"properties": {
			"ask5": {
				"title": Quests['ask5'],
				"type":"string",
				"uniqueItems": true,
				"format":"select",
				"enum":[
						"Yes",
						"No",
						"Partially"
						]		
				
			},		
			"ask6": {
				"title": Quests['ask6'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
						"Yes, all of them",
						"Yes, limited",
						"No"
					]		
			}
		}		
	}
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat6'],
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {
                    "2014 (to date)": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
                    },
                    "2013": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
                    },
                    "2012": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
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
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Animal movement restrictions",
                    "Application of biosecurity measures",
                    "Quarantine measures",
                    "Emergency vaccination"
                ]
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
});define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat7'],
	    "properties": {
	        "ask16": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask16.1": {
	            "title": Quests['ask16.1'],
	            "type": "string",
	        },
	        "ask16.2": {
	            "title": Quests['ask16.2'],
	            "type": "string",
	        },
	        "ask17": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask17.1": {
	            "title": Quests['ask16.1'],
	            "type": "string",
	        },
	        "ask17.2": {
	            "title": Quests['ask16.2'],
	            "type": "string",
	        }
	    }
	};
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask18": {
                "title": Quests['ask18'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask18.1": {
                "title": Quests['ask18.1'],
                "type": "object",
                "properties": {
                    "ask18.1.1": {
                        "title": Quests['ask18.1.1'],
                        "type": "string"
                    },
                    "ask18.1.2": {
                        "title": Quests['ask18.1.2'],
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
            "aks18.2": {
                "title": Quests['ask18.2'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "aks19": {
                "title": Quests['ask19'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            }
        }
    };
});define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask20": {
                "title": Quests['ask20'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask20.1": {
                "title": Quests['ask20.1'],
                "type": "string"
            },
            "ask20.2": {
                "title": Quests['ask20.2'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Small holder",
                    "Dairy production",
                    "Beef production",
                    "Small ruminants",
                    "Pigs",
                    "Mixed livestock systems",
                    "Other"
                ]
            },
            "ask20.3": {
                "title": Quests['ask20.3'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask20.4": {
                "title": Quests['ask20.4'],
                "type": "string"
            }
        }
    };
});