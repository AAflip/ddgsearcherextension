function returnLink(x){
    return "https://duckduckgo.com/?t=ffab&q="+x+"&atb=v368-1&ia=web";
}

async function doTheDo(){
    let urlFromGog = "ERROR: Search Engine Unknown";
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    let j = 0;
    if(tab.url.test("bing.com")){
        j = 30;
    }else if(tab.url.test("google.com")){
        j = 32;
    }else if(tab.url.test("yahoo.com")){
        j = 56;
    }else if(tab.url.test("duckduckgo.com")){
        j = 26;
    }else{
        i = true;
    }
    let i = false;
    while(i==false){
        if(urlFromGog == "ERROR: Search Engine Unknown"){urlFromGog = ""}
        if(tab.url[j] != "&"){
            urlFromGog += tab.url[j];
            j++;
        }else{
            i = true;
        }
    }
    window.open(returnLink(urlFromGog), '_blank').focus();
}
doTheDo();