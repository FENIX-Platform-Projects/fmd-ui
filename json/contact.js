define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['contact_info'],
        "properties": {

            "date": {
                "type": "string",
                "title": Quests['contact_info_1'],
                "format": "date"
            },
            "country": {
                "type": "string",
                "title": Quests['contact_info_2']
            },          
            "email": {
                "type": "string",
                "title": Quests['contact_info_3']
            }, 
            "phone": {
                "type": "string",
                "title": Quests['contact_info_4']
            }, 
            "street": {
                "type": "string",
                "title": Quests['contact_info_5']
            },       

            "person": {
                "title": Quests['contact_person'],
                "type": "object",
                "properties": {
                    "contact_1": {
                        "title": Quests['contact_person_1'],
                        "type": "object",
                        "properties": {
                            "contact_person_1_1": {
                                "title": Quests['contact_person_1_1'],
                                "type": "string"
                            },
                            "contact_person_1_2": {
                                "title": Quests['contact_person_1_2'],
                                "type": "string"
                            }
                        }
                    },
                    "contact_person_2": {
                        "title": Quests['contact_person_2'],
                        "type": "object",
                        "properties": {
                            "contact_person_2_1": {
                                "title": Quests['contact_person_2_1'],
                                "type": "string"
                            },
                            "contact_person_2_2": {
                                "title": Quests['contact_person_2_2'],
                                "type": "string"
                            }
                        }
                    },
                    "contact_person_3": {
                        "title": Quests['contact_person_3'],
                        "type": "object",
                        "properties": {
                            "contact_person_3_1": {
                                "title": Quests['contact_person_3_1'],
                                "type": "string"
                            },
                            "contact_person_3_2": {
                                "title": Quests['contact_person_3_2'],
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    };
});