module.exports = manifest = {
    "name": "CaptainDirgo Extension",
    "short_name": "CaptainDirgo",
    "description": "CaptainDirgo is the comment section of the Internet.",
    "homepage_url": "https://captaindirgo.com",
    "icons": {
        "16": "assets/images/logo/icon-16.png",
        "48": "assets/images/logo/icon-48.png",
        "128": "assets/images/logo/icon-128.png"
    },
    "permissions": [
        "activeTab",
        "https://*.captaindirgo.com/*"
    ],
    "browser_action": {
        "default_icon": "assets/images/logo/icon-128.png",
        "default_popup": "popup/popup.html"
    },
    "commands": {
        "_execute_browser_action": {
            "suggested_key": {
                "default": "Alt+Shift+D",
                "mac": "Alt+Shift+D"
            }
        }
    },
    "content_scripts": [
        {
            "matches": ["https://*.twitter.com/*"],
            "js": ["content/twitter/script/script.js"],
            "run_at": "document_end",
        },
        {
            "matches": ["https://*.youtube.com/*"],
            "js": ["content/youtube/script/script.js"]
        },
        {
            "matches": ["https://*.reddit.com/*"],
            "js": ["content/reddit/script/script.js"]
        },
        {
            "matches": ["https://*.wikipedia.org/*"],
            "js": ["content/wikipedia/script/script.js"]
        },
        {
            "matches": [
                "http://*/*",
                "https://*/*"
            ],
            "js": ["content/all/script/script.js"]
        }
    ],
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self' https://*.captaindirgo.com/*",
    "incognito": "spanning",
    "optional_permissions": [
        "topSites"
    ]
};
