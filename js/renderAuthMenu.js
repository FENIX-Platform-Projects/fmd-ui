define(['underscore',
	'config/services',
    'submodules/fenix-ui-common/js/AuthManager',
    'fx-menu/start',
	'config/fenix-ui-menu'
], function (_,	Config, AuthManager, Menu, menuConf) {

	return function(menuId) {
		//AUTH & TOP MENU
		var path = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).match(/\/(.+)\..*/)
			pagename = !_.isEmpty(path) ? [1] : 'index';

		if(menuId===true)
			menuId = pagename;

		menuConf.active = menuId;

		var menuConfAuth = _.extend({}, menuConf, {
				hiddens: ['login']
			}),
			menuConfPub = _.extend({}, menuConf, {
				hiddens: ['dataentry','editor','logout']
			});

		var auth = new AuthManager({
				onLogin: function() {
					window.location.href = 'compile.html';
				},
				onLogout: function() {
					window.location.href = 'index.html';
				}
			}),
			menu = new Menu( Config.debug || auth.isLogged() ? menuConfAuth : menuConfPub );

		if(_.contains(Config.adminPages, menuId) && auth.isLogged()===false)
			window.location.replace('index.html');
        
        $('footer').load('html/footer.html');
        
		return {
			auth: auth,
			menu: menu
		};
	};
});