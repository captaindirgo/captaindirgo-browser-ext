function addIframe() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'cm-frame');
    iframe.setAttribute(
        'style',
        'top: 10px;right: 10px;width: 400px;height: calc(100% - 20px);z-index: 2147483650;border: none; position:fixed;'
        );
    iframe.setAttribute('allow', '');
    iframe.src = chrome.runtime.getURL('sidebar.html');

    document.body.appendChild(iframe);
}

// var iDiv = document.createElement('div');
// iDiv.id = 'block';
// iDiv.className = 'block';
// iDiv.innerHTML = 'hi there'
// document.body.appendChild(iDiv)

addIframe()
