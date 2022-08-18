chrome.runtime.onMessage.addListener(function (request, sender, response) {
  if (request.todo == "modal") {
    var title = prompt("请输入标题");
    if (title != null && title != "") {
      document.title = title;
    }
  }
});
