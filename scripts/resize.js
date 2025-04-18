function resize() {
    if ((window.innerWidth/window.innerHeight) < 1) {
	for (let campus of document.getElementsByClassName("campusContainer")) {
	    campus.style.margin = "0"
	    campus.style.width = "100%"
	}
	for (let pageLink of document.getElementsByClassName("pageLinkContainer")) {
	    pageLink.style.margin = "0"
	    pageLink.style.width = "100%"
	}
    } else {
	for (let campus of document.getElementsByClassName("campusContainer")) {
	    campus.style.margin = "0 1% 0 0"
	    campus.style.width = "78%"
	}
	for (let pageLink of document.getElementsByClassName("pageLinkContainer")) {
	    pageLink.style.margin = "0 0 0 1%"
	    pageLink.style.width = "20%"
	}
    }
    return
}
resize()
window.addEventListener("resize", resize)
