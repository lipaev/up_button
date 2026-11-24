//init button object
let linkObject = document.createElement("button")
linkObject.addEventListener("click", () => window.scrollTo(0, 0))
linkObject.textContent = "TOP"
linkObject.id = "scrollToTopButton"

//init button logic
let exist;
function up_button() {
    chrome.storage.local.get(location.host).then(items => {

        //display button status from storage
        let displayButton = items[location.host]?.displayButton
        if (displayButton === undefined) displayButton = true;

        //button position
        if (items[location.host]?.position === "Left") {
            linkObject.classList.add("left")
        } else {
            linkObject.classList.remove("left")
        }

        //check window position
        exist = document.querySelector("#scrollToTopButton")
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