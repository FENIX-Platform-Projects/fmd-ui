define(['underscore',
	'config/services',
    'submodules/fenix-ui-common/js/AuthManager',
    'fx-menu/start',
	'config/fenix-ui-menu'
], function (_,	Config, AuthManager, Menu, ConfigMenu) {

	return function(menuId) {
		//AUTH & TOP MENU
		var path = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')).match(/\/(.+)\..*/),
			pagename = !_.isEmpty(path) ? path[1] : 'index';

		if(menuId===true)
			menuId = pagename;

		ConfigMenu.active = menuId;

		var authMenuConf = _.extend({}, ConfigMenu, {
				hiddens: ['login']
			}),
			pubMenuConf = _.extend({}, ConfigMenu, {
				hiddens: ['dataentry','editor','profile','logout']
			});

		var lang = requirejs.s.contexts._.config.i18n.locale.toUpperCase(),
			auth = new AuthManager({
				storekey: 'fmd.auth.user',
				onLogin: function() {
					window.location.href = 'compile.html';
				},
				onLogout: function() {
					window.location.href = 'index.html';
				}
			}),

			authorized = Config.debug || auth.isLogged(),
			menuConf = authorized ? authMenuConf : pubMenuConf;

		if(authorized) {
			var u = auth.getCurrentUser();
			menuConf.config.rightItems[0].label[lang] += u.name+' &bull; '+u.email;
		}


		var menu = new Menu( menuConf );

		if(_.contains(Config.adminPages, pagename) && !auth.isLogged())
			window.location.replace('index.html');
        
        $('footer').load('html/footer.html');
        
		return {
			auth: auth,
			menu: menu,
			lang: lang
		};
	};
});