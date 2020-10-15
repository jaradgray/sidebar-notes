/*
The extension's background script.
Page and browser action click events (i.e. clicks on the extension's icon in
the URL bar or toolbar) are dispatched to an extension's background scripts,
so we'll listen for and handle that click event here.

*/

/*
On page action click (i.e. click on extension's icon in the browser's URL bar),
toggle the extension's sidebar.
*/
browser.pageAction.onClicked.addListener(function(tab) {

    // open sidebar
    browser.sidebarAction.toggle();

    // create new Window
    // let creating = browser.windows.create({
    //     type: "popup",
    //     height: 200,
    //     width: 400,
    //     top: 100,
    //     left: 100,
    // });

    // creating.then(windowCreateSuccessCallback, windowCreateFailureCallback);

    // Send a message to the current tab's content script (i.e. content.js), and handle the response
    // browser.tabs.sendMessage(tab.id, {msg: "page action clicked"}).then(function(response) {
    //     // // For each url in the response...
    //     // for (let url of response.urls) {
    //     //     // ...Open a new tab and navigate to the url
    //     //     browser.tabs.create({url: url});
    //     // }

    //     // TODO add stuff to do on response from message
    // });
});

function windowCreateSuccessCallback(result /* windows.Window object */) {
    console.log("Success: " + result);
    for (let property in result) {
        console.log(property + ": " + result[property]);
    }

    let updateInfo = {
        left: 2
    }

    browser.windows.update(result.id, updateInfo);
}

function windowCreateFailureCallback(error) {
    console.log("Failute: " + error);
}