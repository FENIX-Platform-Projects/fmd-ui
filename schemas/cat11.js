define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat11'],
		"properties": {
			"ask26": {
				"title": Quests['ask26'],
				"$ref": "#/definitions/yesno"
			},

			"ask27": {
				"title": Quests['ask27'],
				"type": "object",
				'properties': {

					"ask27_1": {
						"title": Quests['ask27_1'],
						"type": "object",
						"properties": {


							"ask27_1a": {
								"title": Quests['ask27_1a'],
								"type": "string"
							},

							"ask27_1b": {
								"title": Quests['ask27_1b'],
								"$ref": "#/definitions/yesno"
							},

							"ask27_1c": {
								"title": Quests['ask27_1c'],
								"$ref": "#/definitions/yesno"
							},


							"ask27_1d": {
								"title": Quests['ask27_1d'],
								"type": "string",
								"uniqueItems": true,
								"format": "select",
								"enum": [
									"Zonal vaccination in a	given geographic area of the country",
									"Vaccination for some specific production systems (dairy, beef, etc.)",
									"Vaccination for only some specific age groups",
									"Ring vaccination is used in response to an FMD outbreak"


								]
							}


						}
					},

					"ask27_2": {
						"title": Quests['ask27_2'],
						"type": "object",
						"properties": {


							"ask27_12a": {
								"title": Quests['ask27_2a'],
								"type": "string"
							},

							"ask27_2b": {
								"title": Quests['ask27_2b'],
								"$ref": "#/definitions/yesno"
							},

							"ask27_2c": {
								"title": Quests['ask27_2c'],
								"$ref": "#/definitions/yesno"
							},

							"ask27_2d": {
								"title": Quests['ask27_2d'],
								"type": "string",
								"uniqueItems": true,
								"format": "select",
								"enum": [
									"Zonal vaccination in a	given geographic area of the country",
									"Vaccination for some specific production systems (dairy, beef, etc.)",
									"Vaccination for only some specific age groups",
									"Ring vaccination is used in response to an FMD outbreak"

								]
							}


						}
					},

					"ask27_3": {
						"title": Quests['ask27_3'],
						"type": "object",
						"properties": {


							"ask27_3a": {
								"title": Quests['ask27_3a'],
								"type": "string"
							},

							"ask27_3b": {
								"title": Quests['ask27_3b'],
								"$ref": "#/definitions/yesno"
							},

							"ask27_3c": {
								"title": Quests['ask27_3c'],
								"$ref": "#/definitions/yesno"
							},
							"ask27_3d": {
								"title": Quests['ask27_3d'],
								"type": "string",
								"uniqueItems": true,
								"format": "select",
								"enum": [
									"Zonal vaccination in a	given geographic area of the country",
									"Vaccination for some specific production systems (dairy, beef, etc.)",
									"Vaccination for only some specific age groups",
									"Ring vaccination is used in response to an FMD outbreak"

								]
							}


						}
					}


				}
			},
			"ask28": {
				"title": Quests['ask28'],
				"type": "array",
				"minItems": 1,
				"maxItems": 5,
				"items": {
					"type": "object",
					"properties": {
						"ask28_1": {
							"title": Quests['ask28_1'],
							"$ref": "#/definitions/years"
						},
						"ask28_2": {
							"title": Quests['ask28_2'],
							"type": "string"
						},
						"ask28_3": {
							"title": Quests['ask28_3'],
							"type": "string"
						},
						"ask28_4": {
							"title": Quests['ask28_4'],
							"type": "string"
						},
						"ask28_5": {
							"title": Quests['ask28_5'],
							"type": "string"
						},
						"ask28_6": {
							"title": Quests['ask28_6'],
							"type": "string"
						}

					}
				},
				"additionalItems": false
			},

			'ask29':{
				"title": Quests["ask29"],
				"type": "object",
				"properties":{


					"ask29_1":{
						"title": Quests["ask29_1"],
						"type": "object",
						"properties":{



							"ask29_1_1":{
								"title": Quests["ask29_1_1"],
								"type": "object",
								"properties":{

									"ask29_1_1a": {
										"title": Quests["ask29_1_1a"],
										"type":"string"
									},
									"ask29_1_1b": {
										"title": Quests["ask29_1_1b"],
										"type":"string"
									}

								}
							},
							"ask29_1_2":{
								"title": Quests["ask29_1_2"],
								"type": "object",
								"properties":{

									"ask29_1_2a": {
										"title": Quests["ask29_1_2a"],
										"type":"string"
									},
									"ask29_1_2b": {
										"title": Quests["ask29_1_2b"],
										"type":"string"
									}

								}
							}

						}

					},
					"ask29_2":{
						"title": Quests["ask29_2"],
						"type": "object",
						"properties":{



							"ask29_2_1":{
								"title": Quests["ask29_2_1"],
								"type": "object",
								"properties":{

									"ask29_2_1a": {
										"title": Quests["ask29_2_1a"],
										"type":"string"
									},
									"ask29_2_1b": {
										"title": Quests["ask29_2_1b"],
										"type":"string"
									}

								}
							},
							"ask29_2_2":{
								"title": Quests["ask29_2_2"],
								"type": "object",
								"properties":{

									"ask29_2_2a": {
										"title": Quests["ask29_2_2a"],
										"type":"string"
									},
									"ask29_2_2b": {
										"title": Quests["ask29_2_2b"],
										"type":"string"
									}

								}
							}

						}

					},
					"ask29_3":{
						"title": Quests["ask29_3"],
						"type": "object",
						"properties":{



							"ask29_3_1":{
								"title": Quests["ask29_3_1"],
								"type": "object",
								"properties":{

									"ask29_3_1a": {
										"title": Quests["ask29_3_1a"],
										"type":"string"
									},
									"ask29_3_1b": {
										"title": Quests["ask29_3_1b"],
										"type":"string"
									}

								}
							},
							"ask29_3_2":{
								"title": Quests["ask29_3_2"],
								"type": "object",
								"properties":{

									"ask29_3_2a": {
										"title": Quests["ask29_3_2a"],
										"type":"string"
									},
									"ask29_3_2b": {
										"title": Quests["ask29_3_2b"],
										"type":"string"
									}

								}
							}

						}

					}




				}

			},

			"ask30":{
				"title": Quests["ask30"],
				"$ref": "#/definitions/yesno"
			},


			"ask30_1":{
				"title": Quests["ask30_1"],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					">75%",
					">50%-75%",
					">25 - 550%",
					"<25%"
				]
			},

			"ask31":{
				"title": Quests["ask31"],
				"$ref": "#/definitions/yesno"
			},

			"ask31_1":{
				"title": Quests["ask31_1"],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"The vaccine producer",
					"National authorities",
					"International reference laboratory"
				]
			},



			"ask31_2":{
				"title": Quests["ask31_2"],
				"type": "object",
				"properties":{

					"ask31_2a": {
						"title": Quests["ask31_2a"],
						"type": "array",
						"uniqueItems": true,
						"items": {
							"type": "string",
							"enum": [


								"Vaccine matching: vaccine virus tested against with field strains tested at least once",
								"Vaccine potency: was the PD50 determined?",
								"Immune response after vaccination (Structural Protein-Antibody response 30 days (or more)after vaccination",
								"Vaccine effectiveness studies: field study	comparing occurrence of clinical FMD in	vaccinated animals compared with nonvaccinated animals.",
								"Cold chain: Was the Vaccine Cold Chain	monitored and assessed?"


							]
						}
					},



					"ask31_2b": {
						"title": Quests["ask31_2b"],
						"type": "array",
						"uniqueItems": true,
						"items": {
							"type": "string",
							"enum": [
								"Vaccine matching: vaccine virus tested against with field strains tested at least once",
								"Vaccine potency: was the PD50 determined?",
								"Immune response after vaccination (Structural Protein-Antibody response 30 days (or more)after vaccination",
								"Vaccine effectiveness studies: field study	comparing occurrence of clinical FMD in	vaccinated animals compared with nonvaccinated animals.",
								"Cold chain: Was the Vaccine Cold Chain	monitored and assessed?"
							]
						}


					}


				}
			}





		}
	};
});