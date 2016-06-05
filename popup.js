chrome.runtime.onMessage.addListener (function(request, sender, sendResponse) {
  chrome.storage.local.set({"url":request.url}, function(){});
  chrome.storage.local.set({"img":request.img}, function(){});
  getUrls();
});


getUrls();

function getUrls() {
  chrome.storage.local.get(["url", "img"], function(items){
    $('#link').val(items.url);
    $('#img').val(items.img);
  });
}
