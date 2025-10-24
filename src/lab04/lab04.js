
console.log("lab 04");

const btnLogin = document.getElementById("btnLogin")
const usernameElement = document.getElementById("username")
const passwordElement = document.getElementById("password")

// s

btnLogin.addEventListener('click', () => {
    const username = usernameElement.value
    const password = passwordElement.value
    if (username === "admin" && password === "12345") {
        alert("Login successful")
        window.location.href = "success.html"
    } else {
        alert("Login failed")
        usernameElement.style.borderColor = "red"
    }
    console.log(usernameElement.value, passwordElement.value);
})