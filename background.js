
const colors = {
  "1": "#ff0000",
  "2": "#ff8800",
  "3": "#ffff00",
  "4": "#00cc44",
  "5": "#0088ff",
  "6": "#9933ff"
};

const originalColors = new Map();

chrome.commands.onCommand.addListener((command) => {
  if (command === "reset-dice") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: () => {
            document.body.style.backgroundColor = "";
          }
        });
      }
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (!sender.tab?.id) return;

  if (message.key === "reset") {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: () => {
        document.body.style.backgroundColor = "";
      }
    });
  } else if (colors[message.key]) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
      args: [colors[message.key]]
    });
  }
});
