let toggleButton = document.querySelector("#toggleCheckbox")

//get host of active window
chrome.tabs.query({active: true, currentWindow: true}).then(arr => {
    let host = new URL(arr[0].url).host

    //set checkbox
    chrome.storage.local.get(host, (items) => {
        let displayButton = items[host]?.["displayButton"]
        if (displayButton !== undefined) {
            toggleButton.checked = !displayButton;
        }
    })

    //add listener to checkbox
    toggleButton.addEventListener("change", () => {
        chrome.storage.local.set({[host]: {displayButton: !toggleButton.checked}})
    })
})