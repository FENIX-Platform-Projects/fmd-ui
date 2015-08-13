define(['underscore',
	'config/services',
    'submodules/fenix-ui-common/js/AuthManager',
    'fx-menu/start',
	'config/fenix-ui-menu'
], function (_,	Config, AuthManager, Menu, menuConf) {

	return function(menuId) {
		//AUTH & TOP MENU
		var pagename = location.pathname.substring(location.pathname.lastIndexOf('/')).match(/\/(.+)\..*/)[1];

		if(menuId===true)
			menuId = pagename;

		var adminPages = ['compile','view','editor'];
		
		console.log('pagename', pagename)

		menuConf.active = menuId;

		var menuConfAuth = _.extend({}, menuConf, {
				hiddens: ['login']
			}),
			menuConfPub = _.extend({}, menuConf, {
				hiddens: ['dataentry','editor','logout']
			});

		var auth = new AuthManager({
				onLogin: function() {
					location.reload();
				},
				onLogout: function() {
					location.href = 'index.html';
				}
			}),
			menu = new Menu( Config.debug || auth.isLogged() ? menuConfAuth : menuConfPub );

		if(_.contains(adminPages, menuId) && auth.isLogged()===false)
			window.location.replace('index.html');
        
        $('footer').load('html/footer.html');
        
		return {
			auth: auth,
			menu: menu
		};
	};
});