// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "image";
  var title = "Save to Ala's website";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var img = info.srcUrl;
  var url = info.pageUrl;
  var parId = info.parentMenuItemId
  chrome.storage.local.set({"url":url}, function(){});
  chrome.storage.local.set({"img":img}, function(){});
  //chrome.runtime.sendMessage({'url': url, 'img': img}, function(){});
};

function getUrl() {
  var url;
  chrome.tabs.getSelected(null, function(tab) {
    url = tab.url;
  });
  return url;
}
