var newTab = {};

__BROWSER__.runtime.sendMessage({
    action: BACKGROUND_ACTION_GET_KEY,
    key: STORAGE_KEY_ALL
}, function(defaults) {
    _init(defaults);
});

function _init(defaults) {
    newTab.userDefaults = defaults;
    newTab.classes = {
        modules: {
            captaindirgo: {
                index: new CaptainDirgo(),
                home: new CaptainDirgoHome(),
                discover: new CaptainDirgoDiscover(),
                notifications: new CaptainDirgoNotifications(),
            },
            topsites: {
                index: new TopSites(),
            },
        },
        page: {
            datetime: new DateTime(),
            menu: new Menu(),
            search: new Search(),
            background: new Background()
        }
    };

    newTab.settings = new Settings();
};
