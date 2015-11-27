define(['i18n!nls/questions'], function(Quests) {

    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear();

    if(dd<10)
        dd = '0'+dd;
    if(mm<10)
        mm = '0'+mm;
    
    //today = dd+'/'+mm+'/'+yyyy;
    today = yyyy+'-'+mm+'-'+dd;

    return {
        "type": "object",
        "title": Quests['contact_info'],
        "required": [
            "date",
            "country",
            "name"
        ],
        "properties": {
            "date": {
                "type": "string",
                "title": Quests['contact_info_1'],
                "format": "date",   //yyyy-mm-dd
                "default": today
            },
            "country": {
                "type": "string",
                "title": Quests['contact_info_2']
            },
            "name": {
                "type": "string",
                "title": Quests['contact_info_3']
            },         
            "email": {
                "type": "string",
                "title": Quests['contact_info_4'],
                "format": "email"
            }, 
            "phone": {
                "type": "integer",
                "title": Quests['contact_info_5'],
                "format": "number"
            },
            "street": {
                "type": "string",
                "title": Quests['contact_info_6']
            },
            "person": {
                "title": Quests['contact_person'],
                "type": "object",
                "options": {
                    "disable_collapse": false,
                    "collapsed": true
                },                
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