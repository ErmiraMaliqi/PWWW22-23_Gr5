window.onload = (event) => {
    // console.log(checkIfUser())
    isUserLogged()
}

window.onload = (event) => {
    // console.log(checkIfUser())
    isUserLogged()
}

function isUserLogged() {
    editNav(checkIfUser())

}
function checkIfUser() {
    var isauth = false;
    if (getDataFromLS("token")) {
        isauth = true
    }
    return isauth
}

function login() {
    localStorage.setItem('token', 'isLoggedIn')
    alert('You are logged in!')
}
function editNav(data) {
    if (data) {
        // document.getElementById("loginLink").style.display = "none";
        // document.getElementById("logoutLink").style.display = "block";
        document.getElementById("user").style.display = "block"
        document.getElementById("user").innerHTML = getDataFromLS("name")
        document.getElementById("logoutLink").addEventListener("click", logout)
    } else {
        document.getElementById("loginLink").style.display = "block";
        document.getElementById("user").style.display = "none"
        document.getElementById("logoutLink").style.display = "none";

    }
}
function logout() {
    removeFromLS("token")
    removeFromLS("name")
}