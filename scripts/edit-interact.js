async function editRedirect(name) {
	window.location.replace("../../building/" + name)
}

for (fullLike in Array.from(document.getElementsByClassName("unclickedLike"))) {
	fullLike.addEventListener("click", () => {
		fullLike.className = "clickedLike"
		fetch("http://35.184.131.82:5838/edits/view", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUser: fullLike.id })
		})
		.then(response => {
			if (response.json() >= 10) {
				window.location.replace("/")
			}
		})
	})
}