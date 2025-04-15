const userProfile = document.getElementById("usr")

userProfile.addEventListener("click", () => {
    let dropdownContent = document.getElementById("dropdownContent")
    if (dropdownContent.className == "hide") {
        dropdownContent.className = "show"
    } else {
        dropdownContent.className = "hide"
    }
})

async function logout() {
    fetch("http://35.184.131.82:5838/userLogout", {
        method: "POST"
    })
    .then(window.location.replace("http://35.184.131.82:5838"))
}