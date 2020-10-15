/*
The extension's content script.

Content scripts can communicate with other extension components (e.g.
background scripts) and has access to the current web page's DOM.

Our content script listens for events from our background script.
*/


/*
Listen for messages from other extension components, i.e. background.js
*/
browser.runtime.onMessage.addListener(function(message) {
    console.log("content.js received message: " + message);
});