// alert("Page Identified");
// chrome.webRequest.onBeforeRequest((details)=>{
//     console.log(details);
// },
// {urls: ["*://*.linkedin.com/*"]},
// ["blocking"]
// );
chrome.runtime.sendMessage({
    from: 'content',
    sub: 'detect'
});

