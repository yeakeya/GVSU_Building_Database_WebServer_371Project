async function editRedirect(name) {
	window.location.replace("../../building/" + name)
}

for (let fullLike of document.getElementsByClassName("unclickedLike")) {
	console.log(fullLike)
	fullLike.addEventListener("click", () => {
		fullLike.className = "clickedLike"
		fetch("http://35.184.131.82:5838/edits/view", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUser: fullLike.id })
		})
		.then(response => {
		    if (response.json() >= 10) {
			for (let element of document.getElementById(fullLike.id)) {
			    element.remove()
			}
		    }
		})
	})
}
