define(['underscore',
    'submodules/fenix-ui-common/js/AuthManager',
    'fx-menu/start',
	'config/fenix-ui-menu'
], function (_,	AuthManager, Menu, menuConf) {

	return function(menuId) {
		//AUTH & TOP MENU

		if(menuId===true)
			menuId = location.pathname.substring(location.pathname.lastIndexOf('/')).match(/\/(.+)\..*/)[1];
		
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
			menu = new Menu( auth.isLogged() ? menuConfAuth : menuConfPub );

        
        $('footer').load('html/footer.html');
        
		return {
			auth: auth,
			menu: menu
		};
	};
});