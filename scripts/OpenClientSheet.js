document.getElementById("open-client-sheet").addEventListener("click", function(){
    chrome.tabs.create({url: "https://docs.google.com/spreadsheets/d/1AD_KVH_f39taB3E1ykCoeZ3QJFsrCIhuA5TFBUI6xXc"})
});