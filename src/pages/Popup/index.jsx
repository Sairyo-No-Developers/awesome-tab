import './index.css';
var newURL = 'chrome://newtab';
try {
    chrome.tabs.create({ url: newURL });
} catch (error) {}

try {
    edge.tabs.create({ url: newURL });
} catch (error) {}

// render(<Popup />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
