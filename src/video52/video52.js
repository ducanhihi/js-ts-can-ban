console.log("video 52");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");

const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
    console.log("Button clicked!");
    myTextElement.innerText = "You clicked the button!";
});

backBtnElement.addEventListener("click", () => {
    console.log("Button clicked!");
    myTextElement.innerText = "Video 52";
});