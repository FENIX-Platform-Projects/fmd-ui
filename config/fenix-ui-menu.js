define({
	"active": "index",
	"hiddens": [],
	"breadcrumb": {
		"active":true,
		"showHome":true,
		"container": ".fx-menu-breadcrumb"
	},
	"container": ".fx-menu-container",
	"config": {
		"type": "static-top",
    	"container": ".fx-menu-container",
		"brand": {
			"target": "index.html"
		},
		"languages": [
			{
				"lang": "FR",
				"label": "Fr"
			},
			{
				"lang": "EN",
				"label": "En"
			}
		],
		"items": [
			{
				"attrs": {
					"id": "index"
				},
				"target": "index.html",
				"label": {
					"EN": "Home",
					"FR": ""
				},
				"breadcrumbLabel": {
					"EN": "Global Foot and Mouth Disease (FMD) Control Strategy",
					"FR": ""
				}
			},
			{
				"attrs": {
					"id": "about_us"
				},
				"target": "about_us.html",
				"label": {
					"EN": "About Us",
					"FR": ""
				},
				"breadcrumbLabel": {
					"EN": "About Us",
					"FR": ""
				}
			},
			{
				"attrs": {
					"id": "down"
				},
				"target": "down.html",
				"label": {
					"EN": "Download",
					"FR": ""
				}
			},
			{
				"attrs": {
	                "id": "dataentry",
					"class": "admin"	                
	            },
	            "target": "#",
	            "label": {
	                "EN": "Data Entry",
	                "FR": ""
	            },				
				"type": "dropdown",
	            "children": [
					{
						"attrs": {
							"id": "compile"
						},
						"target": "compile.html",
						"label": {
							"EN": "New Questionnaire",
							"FR": ""
						}
					},
					{
						"attrs": {
							"id": "view",
							"class": "admin"
						},
						"target": "view.html",
						"label": {
							"EN": "Archive",
							"FR": ""
						},
						"breadcrumbLabel": {
							"EN": "Archive",
							"FR": ""
						}
					}
				]
			}
/*			,{
				"attrs": {
					"id": "editor",
					"class": "admin"
				},
				"target": "editor.html",
				"label": {
					"EN": "Edit Questionnaire",
					"FR": ""
				}
			}*/

		],
		"rightItems": [
			{
				"attrs": {
					"id": "login",
					"class": "afo-eldorado-icons"
				},
				"label": {
					"EN": "LOGIN <span class='icojam_user'></span>",
					"FR": ""
				}
			},
			{
				"attrs": {
					"id": "logout",
					"class": "afo-eldorado-icons"
				},
				"label": {
					"EN": "LOGOUT <span class='icojam_user'></span>",
					"FR": ""
				}
			}			
		]
	}
});