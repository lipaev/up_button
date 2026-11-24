"use strict";

let toggleButton = document.querySelector("#toggleCheckbox")
let positionOptions = document.querySelector("#positionOptions")

chrome.tabs.query({active: true, currentWindow: true}).then(arr => {

    //get host of active window
    let host = new URL(arr[0].url).host

    //set values for popup check boxes
    chrome.storage.local.get(host, (items) => {
        let displayButton = items[host]?.["displayButton"]
        if (displayButton !== undefined) {
            toggleButton.checked = !displayButton;
        }
        if (items[host]?.["position"] === "Left") {
            positionOptions.value = "Left";
        }
    })

    //add listeners to checkboxes
    toggleButton.addEventListener("change", () => {
        chrome.storage.local.set({[host]: {displayButton: !toggleButton.checked}})
    })
    positionOptions.addEventListener("change", () => {
        chrome.storage.local.set({[host]: {position: positionOptions.value === 'Left' ? "Left" : "Right"}})
    })

    //add page location to title
    let hidingLabel = document.querySelector("#title")
    hidingLabel.innerText = hidingLabel.innerText + " " + host
})