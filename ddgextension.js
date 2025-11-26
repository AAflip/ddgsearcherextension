function returnLink(x){
    return "https://duckduckgo.com/?t=ffab&q="+x+"&atb=v368-1&ia=web";
}

async function testing(){
    let urlFromGog = "";
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    let j = 30;
    let i = false;
    while(i==false){
        if(tab.url[j] != "&"){
            urlFromGog += tab.url[j];
            j++;
        }else{
            i = true;
        }
    }
    window.open(returnLink(urlFromGog), '_blank').focus();
}
testing();