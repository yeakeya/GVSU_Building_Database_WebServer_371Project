async function loginCheck() {
    let feedback = document.getElementById("loginFeedback");
    feedback.innerHTML = "<img src=\"loading.gif\">";

    loginSubmission = { username: document.getElementById("username").value, password: document.getElementById("password").value }
    console.log(loginSubmission)

    fetch("http://35.184.131.82:5838/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginSubmission)
    })
    .then(response => response.json())
    .then(json => {
        feedback.innerHTML = json
        if (json == "Login successful!") {
            window.location.replace("http://35.184.131.82:5838")
        }
    })
}
