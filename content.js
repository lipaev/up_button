let linkObject = document.createElement("button")
linkObject.addEventListener("click", () => window.scrollTo(0, 0))
linkObject.textContent = "TOP"
linkObject.id = "topExtensionButton"
document.addEventListener("scroll", () => {
    let exist = document.querySelector("#topExtensionButton")
    if (window.scrollY >= window.innerHeight / 2 && !exist) {
        document.body.append(linkObject)
    } else if (window.scrollY <= window.innerHeight / 2 && exist) {
        exist.remove()
    }
})
