document.getElementById("change").onclick = function () {
  const titleValue = document.getElementById("title").value;
  chrome.tabs.query({ currentWindow: true, active: true }, (result) => {
    function changeTitle(titleValue) {
      document.title = titleValue;
    }
    chrome.scripting.executeScript({
      target: { tabId: result[0].id },
      func: changeTitle,
      args: [titleValue],
    });
  });
};
