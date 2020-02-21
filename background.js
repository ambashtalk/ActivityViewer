// chrome.webRequest.onBeforeRequest((details)=>{
//     console.log(details);
// },
// {urls: ["*://*.linkedin.com/*"]},
// ["blocking"]
// );

chrome.runtime.onMessage.addListener((msg, sender)=> {  
    if (msg.from == "content" && msg.sub == "detect") {
        chrome.tabs.query({'active' : true},(tabs)=> {
            var url = tabs[0].url;

            var purl="";
            if (window.localStorage.prevURL) {
                purl = window.localStorage.prevURL;
            }
            else {
                purl = url;
            }    

            var linkedin_regex = /linkedin/;
            var profile_regex = /https:\/\/www\.linkedin\.com\/in\/[a-zA-z0-9,-]+\//;
            var activity_regex = /https:\/\/www\.linkedin\.com\/in\/[a-zA-z0-9,-]+\/detail\/recent-activity\//;
            
            // console.log(url);
            var redirect = url.match(profile_regex);
            // console.log(redirect[0]);
            if (redirect && redirect[0] == url){
                console.log("inside if");
                chrome.tabs.update(sender.tab.id, {url: redirect[0]+"detail/recent-activity"});
            }
            window.localStorage.prevURL = url;
        });
    }
});