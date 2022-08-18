var contextMenu = {
  id: "_ChangeTitle_",
  title: "更改标题",
  contexts: ["page"],
};
chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId == "_ChangeTitle_") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "modal",
        result: "modal",
      });
    });
  }
});
