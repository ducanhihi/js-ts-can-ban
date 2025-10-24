console.log("video 53");

const btn = document.getElementById("submitBtn")
const input = document.getElementById("name")
const prevElement = document.getElementById("prevName")

const prevName = localStorage.getItem("name")
if (prevName) {
    prevElement.innerHTML = `<b>${prevName}</b>`
}
btn.addEventListener('click', () => {
    // console.log(input.value);
    localStorage.setItem("name", input.value)
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`
})
