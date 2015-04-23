define({
	"active": "home",
	"hiddens": [],
	"breadcrumb": {
		"active":true,
		"showHome":true,
		"container": ".fx-menu-breadcrumb"
	},
	//TODO move config contents on root
	"config": {
		"type": "fixed-top",
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
					"id": "home"
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
					"id": "view"
				},
				"target": "view.html",
				"label": {
					"EN": "View Questionnaires",
					"FR": ""
				}
			},
			{
				"attrs": {
					"id": "manage"
				},
				"target": "manage.html",
				"label": {
					"EN": "Compile Questionnaire",
					"FR": ""
				}
			}
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