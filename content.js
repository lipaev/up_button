//init button object
let linkObject = document.createElement("button")
linkObject.addEventListener("click", () => window.scrollTo(0, 0))
linkObject.textContent = "TOP"
linkObject.id = "topExtensionButton"

//init button logic
let exist;
function up_button() {
    chrome.storage.local.get(location.host).then(items => {
        let displayButton = items[location.host]?.displayButton
        if (displayButton === undefined) displayButton = true;
        exist = document.querySelector("#topExtensionButton")
        if (window.scrollY >= window.innerHeight / 2 && !exist && displayButton) {
            document.body.append(linkObject)
        } else if (window.scrollY <= window.innerHeight / 2 || !displayButton) {
            exist?.remove()
        }
    })
}

//activate button
up_button();
chrome.storage.local.onChanged.addListener(up_button)
document.addEventListener("scroll", up_button)