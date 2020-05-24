chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.includes('https://web.whatsapp.com/')) {
        chrome.tabs.executeScript(null, {
            file: 'make-dark-mode.js'
        });
    }
})
