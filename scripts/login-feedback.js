async function loginCheck() {
    let feedback = document.getElementById("loginFeedback");
    feedback.innerHTML = "<img src=\"/public/loading.gif\">";

    loginSubmission = { username: document.getElementById("username").value, password: document.getElementById("password").value }
    console.log(loginSubmission)

    fetch("http://35.184.131.82:5838/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginSubmission)
    })
    .then(response => response.json())
    .then(json => {
        if (json != "Incorrect password, try again.") {
            window.location.replace(json)
        } else {
	    feedback.innerHTML = json
	}
    })
}
