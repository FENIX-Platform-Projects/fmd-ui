define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat11'],
		"properties": {
		    "ask24": {
		        "title": Quests['ask24'],
		        "type": "string",
		        "uniqueItems": true,
		        "format": "select",
		        "enum": [
		            "Yes",
		            "No"
		        ]
		    },
		    "ask25": {
		        "title": Quests['ask25'],
		        "type": "object",
		        "properties": {
		            "ask25.1": {

		                "title": Quests['ask25.1'],
		                "type": "string",
		                "uniqueItems": "true",
		                "format": "select",
		                "enum": [
		                    "Large Ruminants",
		                    "Small Ruminants",
		                    "Pig",
		                    "Others"
		                ]
		            },
		            "ask25.2": {
		                "title": Quests['ask25.2'],
		                "type": "string",
		            },

		            "ask25.3": {
		                "title": Quests['ask25.3'],
		                "type": "string",
		                "uniqueItems": "true",
		                "format": "select",
		                "enum": [
		                    "Voluntary",
		                    "Compulsory ",
		                ]
		            },
		            "ask25.4": {
		                "title": Quests['ask25.4'],
		                "type": "string",
		                "uniqueItems": "true",
		                "format": "select",
		                "enum": [
		                    "Uniform vaccination – consistent protocol applied in all areas and animals",
		                    "Non-uniform vaccination – different programs that are best described in the following",
		                ]
		            },
		            "ask25.4.1": {
		                "title": Quests['ask25.4.1'],
		                "type": "string",
		                "uniqueItems": "true",
		                "format": "select",
		                "enum": [
		                    "Zonal – geographic area of the country",
		                    "Sectorial – production system such as dairy, beef, etc",
		                    "Targeted – applying vaccination specifically to certain species, age    categories, locations with added risk of FMD infection, etc",
		                    "Ring vaccination in response to a FMD outbreak"
		                ]
		            },
		            "ask25.4.1.1": {
		                "title": Quests['ask25.4.1.1'],
		                "type": "string"
		            }

		        }
		    },
		    "ask26": {
		        "title": Quests['ask26'],
		        "type": "object",
		        "properties": {
		            "Vaccine name": {
		                "type": "string"
		            },
		            "Supplier": {
		                "type": "string"
		            },
		            "Species in which vaccine is used": {
		                "type": "string"
		            },
		            "Serotypes": {
		                "type": "string"
		            }
		        }
		    },
		    "ask27": {
		        "title": Quests['ask27'],
		        "type": "object",
		        "properties": {
		            "Large Ruminants": {
		                "type": "object",
		                "properties": {
		                    "2013": {
		                        "type": "string"
		                    },
		                    "2014": {
		                        "type": "string"
		                    }
		                }
		            },
		            "Small Ruminants": {
		                "type": "object",
		                "properties": {
		                    "2013": {
		                        "type": "string"
		                    },
		                    "2014": {
		                        "type": "string"
		                    }
		                }
		            },
		            "Pigs": {
		                "type": "object",
		                "properties": {
		                    "2013": {
		                        "type": "string"
		                    },
		                    "2014": {
		                        "type": "string"
		                    }
		                }
		            },
		            "Other": {
		                "type": "object",
		                "properties": {
		                    "2013": {
		                        "type": "string"
		                    },
		                    "2014": {
		                        "type": "string"
		                    }
		                }
		            }
		        }
	        },
	        "ask28": {
	            "title": Quests['ask28'],
	            "type": "object",
	            "properties": {
	                "Large Ruminants": {
	                    "type": "object",
	                    "properties": {
	                        "2013": {
	                            "type": "string"
	                        },
	                        "2014": {
	                            "type": "string"
	                        }
	                    }
	                },
	                "Small Ruminants": {
	                    "type": "object",
	                    "properties": {
	                        "2013": {
	                            "type": "string"
	                        },
	                        "2014": {
	                            "type": "string"
	                        }
	                    }
	                },
	                "Pigs": {
	                    "type": "object",
	                    "properties": {
	                        "2013": {
	                            "type": "string"
	                        },
	                        "2014": {
	                            "type": "string"
	                        }
	                    }
	                },
	                "Other": {
	                    "type": "object",
	                    "properties": {
	                        "2013": {
	                            "type": "string"
	                        },
	                        "2014": {
	                            "type": "string"
	                        }
	                    }
	                }
	            }
	        },
	        "ask29": {
	            "title": Quests['ask29'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Always",
	                "Certain Sectors: (please explain)",
	                "When voluntary vaccination",
	                "Never"
	            ]
	        },
	        "ask29.1": {
	            "title": Quests['ask29.1'],
	            "type": "string"
	        },
	        "ask29.2": {
	            "title": Quests['ask29.2'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "100%",
	                "50% -< 100%",
	                "< 50% "
	            ]
	        },
	        "ask30": {
	            "title": Quests['ask30'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask30.1": {
	            "title": Quests['ask30.1'],
	            "type": "object",
	            "properties": {
	                "ask30.1.1": {
	                    "title": Quests['ask30.1.1'],
	                    "type": "string",
	                    "uniqueItems": true,
	                    "format": "select",
	                    "enum": [
	                        "The vaccine producer ",
	                        "An independent Vaccine Quality control centre/laboratory on behalf of the Veterinary Services"
	                    ]
	                },
	                "ask30.1.1.1": {
	                    "title": Quests['ask30.1.1.1'],
	                    "type": "string"
	                },
	                "ask30.1.2": {
	                    "title": Quests['ask30.1.2'],
	                    "type": "object",
	                    "properties": {
	                        "ask30.1.2.1": {
	                            "title": Quests['ask30.1.2.1'],
	                            "type": "string",
	                            "uniqueItems": true,
	                            "format": "select",
	                            "enum": ["2013", "2014"]
	                        },
	                        "ask30.1.2.2": {
	                            "title": Quests['ask30.1.2.1'],
	                            "type": "string",
	                            "uniqueItems": true,
	                            "format": "select",
	                            "enum": ["2013", "2014"]
	                        },
	                        "ask30.1.2.3": {
	                            "title": Quests['ask30.1.2.1'],
	                            "type": "string",
	                            "uniqueItems": true,
	                            "format": "select",
	                            "enum": ["2013", "2014"]
	                        },
	                        "ask30.1.2.4": {
	                            "title": Quests['ask30.1.2.1'],
	                            "type": "string",
	                            "uniqueItems": true,
	                            "format": "select",
	                            "enum": ["2013", "2014"]
	                        },
	                        "ask30.1.2.5": {
	                            "title": Quests['ask30.1.2.1'],
	                            "type": "string",
	                            "uniqueItems": true,
	                            "format": "select",
	                            "enum": ["2013", "2014"]
	                        }
	                    }
	                }
	            }
	        }
		}
	};
});